function generateRaceStory(results, qualifying) {
  if (!results || !results.length) {
    return '<div class="empty">События гонки будут сформированы после завершения заезда.</div>';
  }
  const winner = results[0];
  const fastest = findOfficialFastestLap(results);
  
  const movers = results.map(x => ({
    driver: x.Driver,
    grid: Number(x.grid) || 0,
    pos: Number(x.position) || 0,
    delta: (Number(x.grid) || 0) - (Number(x.position) || 0)
  })).filter(x => x.grid > 0 && x.pos > 0);
  
  const biggestGain = movers.filter(x => x.delta > 0).sort((a, b) => b.delta - a.delta)[0];
  const biggestDrop = movers.filter(x => x.delta < 0).sort((a, b) => a.delta - b.delta)[0];
  const dnfs = results.filter(x => x.status && x.status !== 'Finished' && !/^\+\d+ Laps?$/.test(x.status) && x.status !== 'Lapped');

  return `
    <div class="race-story-grid">
      <div class="story-card">
        <div class="story-icon">${uiIcon('crash')}</div>
        <div class="story-label">Сходы (DNF)</div>
        <div class="story-val">${dnfs.length} ${ruPlural(dnfs.length, ['болид', 'болида', 'болидов'])}</div>
        <div class="story-sub">${dnfs.map(d => `${esc(d.Driver?.code || d.Driver?.familyName || '—')} (${esc(d.status || 'DNF')})`).slice(0, 3).join(', ') || 'Все пилоты финишировали'}</div>
      </div>
      <div class="story-card">
        <div class="story-icon">${uiIcon('finish')}</div>
        <div class="story-label">Чемпионский задел</div>
        <div class="story-val">+${fmtNum(winner.points)} ${ruPlural(winner.points, ['очко', 'очка', 'очков'])}</div>
        <div class="story-sub">Максимум очков у победителя этапа</div>
      </div>
    </div>
  `;
}

function formatCoordinates(lat, lon) {
  if (lat === null || lat === undefined || lon === null || lon === undefined) return 'Н/Д';
  const nLat = Number(lat);
  const nLon = Number(lon);
  if (!Number.isFinite(nLat) || !Number.isFinite(nLon)) return 'Н/Д';
  const latDir = nLat >= 0 ? 'N' : 'S';
  const lonDir = nLon >= 0 ? 'E' : 'W';
  return `${Math.abs(nLat).toFixed(4)}° ${latDir}, ${Math.abs(nLon).toFixed(4)}° ${lonDir}`;
}

function generateRaceStrategy(pitStops, results, season = null, openF1Stints = null) {
  if ((!pitStops || !pitStops.length) && !openF1Stints) {
    if (season && Number(season) < 2011) {
      return '<div class="empty">Официальная телеметрия пит-стопов не регистрировалась в протоколах до сезона 2011 года.</div>';
    }
    return '<div class="empty">Официальная телеметрия пит-стопов и шинной стратегии формируется для данного этапа.</div>';
  }
  const driversToRender = (results && results.length) ? results.slice(0, 20) : [];
  if (!driversToRender.length) return '<div class="empty">Нет данных о финишёрах для отображения стратегии.</div>';

  let maxLaps = 55;
  driversToRender.forEach(d => {
    const l = parseInt(d.laps);
    if (!isNaN(l) && l > maxLaps) maxLaps = l;
  });

  const adaptedData = StrategyAdapters.historical(pitStops || [], driversToRender, maxLaps);

  if (openF1Stints && typeof openF1Stints === 'object' && !openF1Stints.error) {
    driversToRender.forEach(d => {
      const list = openF1Stints[Number(d.number)] || openF1Stints[String(d.number)] || openF1Stints[Number(d.Driver?.permanentNumber)] || openF1Stints[String(d.Driver?.permanentNumber)] || openF1Stints[d.Driver?.driverId] || openF1Stints[d.Driver?.code];
      const info = adaptedData[d.Driver.driverId];
      if (!list?.length || !info) return;
      const lapsDone = parseInt(d.laps) || info.totalLaps;
      info.stints = list.map((st, idx) => {
        const stStart = Number(st.lap_start) || 1;
        const stEnd = Number(st.lap_end) || lapsDone;
        return new TyreStint({
          driverId: d.Driver.driverId,
          stintNumber: st.stint_number,
          compound: st.compound && st.compound !== 'UNKNOWN' ? st.compound : 'UNAVAILABLE',
          startLap: stStart,
          endLap: stEnd,
          laps: Math.max(1, stEnd - stStart + 1),
          pitDuration: info.pitStops[idx]?.duration || null,
          source: 'OPENF1'
        });
      });
    });
  }

  let tacticalInsight = '';
  if (driversToRender.length >= 2) {
    const p1 = driversToRender[0];
    const p2 = driversToRender[1];
    const p1Stops = adaptedData[p1.Driver.driverId]?.pitStops || [];
    const p2Stops = adaptedData[p2.Driver.driverId]?.pitStops || [];

    if (p1Stops.length && p2Stops.length) {
      const p1Lap = p1Stops[0].lap;
      const p2Lap = p2Stops[0].lap;
      const p1DurStr = p1Stops[0].duration ? `${esc(p1Stops[0].duration)}с` : '<span class="prov-badge prov-unavail">Н/Д</span>';
      const p2DurStr = p2Stops[0].duration ? `${esc(p2Stops[0].duration)}с` : '<span class="prov-badge prov-unavail">Н/Д</span>';
      const lapDelta = Math.abs(p1Lap - p2Lap);

      let tyreAdvantage = '';
      const p1Stints = adaptedData[p1.Driver.driverId]?.stints || [];
      const p2Stints = adaptedData[p2.Driver.driverId]?.stints || [];
      if (p1Stints.length >= 2 && p2Stints.length >= 2 && p1Stints[1].compound !== 'UNAVAILABLE') {
        const c1 = p1Stints[1].compound;
        const c2 = p2Stints[1].compound;
        if (c1 === c2) {
          tyreAdvantage = ` Смена на идентичный состав <b>${esc(c1)}</b>.`;
        } else {
          tyreAdvantage = ` Шинный выбор: <b>${esc(p1.Driver.familyName)}</b> (${esc(c1)}) против <b>${esc(p2.Driver.familyName)}</b> (${esc(c2)}).`;
        }
      }

      tacticalInsight = `
        <div class="tactical-insight-card">
          <div class="tactical-insight-title">
            <svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/></svg> Тактический Undercut / Overcut анализ
          </div>
          <div style="font-size:12px;margin:0;color:var(--text);line-height:1.6">
            <div style="margin-bottom:6px">
              <b>Данные пит-стопов:</b> Борьба в топ-2 — <b>${esc(p1.Driver.familyName)}</b> заехал на круг ${p1Lap} (${p1DurStr}), <b>${esc(p2.Driver.familyName)}</b> заехал на круг ${p2Lap} (${p2DurStr}).
            </div>
            <div>
              <b>Тактическая дельта:</b> Разница окна первой смены: <b>${lapDelta} кр.</b> ${lapDelta > 0 ? (p1Lap < p2Lap ? 'Ранний пит-стоп (потенциальный undercut)' : 'Поздний пит-стоп (потенциальный overcut)') : 'Синхронный пит-стоп'}.${tyreAdvantage}
            </div>
          </div>
        </div>
      `;
    } else {
      tacticalInsight = `
        <div class="tactical-insight-card">
          <div class="tactical-insight-title">
            <svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/></svg> Тактический Undercut / Overcut анализ
            <span class="prov-badge prov-unavail">NOT ENOUGH DATA FOR UNDERCUT ANALYSIS</span>
          </div>
          <p style="font-size:12px;margin:0;color:var(--text-subtle)">
            Для лидеров гонки отсутствуют подтверждённые покруговые времена до и после пит-стопа для математического расчёта выигрыша от undercut.
          </p>
        </div>
      `;
    }
  }

  return `
    ${tacticalInsight}
    <div class="section-header-compact" style="margin-top:10px">
      <h3 class="h4">Шинная стратегия (${driversToRender.length} ${ruPlural(driversToRender.length, ['пилот', 'пилота', 'пилотов'])})</h3>
      <span class="subtle" style="font-size:12px">${(() => {
        if (openF1Stints && typeof openF1Stints === 'object' && !openF1Stints.error && Object.keys(openF1Stints).length > 0) {
          return 'Составы шин и отрезки: OpenF1 · пит-стопы: Jolpica';
        }
        if (openF1Stints === 'UNAVAILABLE' || openF1Stints === 'ERROR' || (openF1Stints && openF1Stints.error)) {
          return 'Отрезки по пит-стопам Jolpica · Составы шин недоступны (OpenF1)';
        }
        if (season && Number(season) < OPENF1_FIRST_SEASON) {
          return 'Отрезки по пит-стопам Jolpica · Составы шин публикуются с 2023 года (OpenF1)';
        }
        return 'Отрезки по пит-стопам Jolpica · составы шин загружаются…';
      })()}</span>
    </div>
    <div class="tyre-legend">
      <span class="stint-compound-soft">S · Soft</span><span class="stint-compound-medium">M · Medium</span><span class="stint-compound-hard">H · Hard</span><span class="stint-compound-inter">I · Inter</span><span class="stint-compound-wet">W · Wet</span>
    </div>
    <div class="strategy-container">
      ${driversToRender.map(d => {
        const did = d.Driver.driverId;
        const driverInfo = adaptedData[did] || { stints: [], pitStops: [], totalLaps: maxLaps };
        const stints = driverInfo.stints;
        const dStops = driverInfo.pitStops;
        const totalLaps = driverInfo.totalLaps;

        return `
          <div class="driver-strategy-row">
            <div class="driver-strategy-head">
              <div><b>P${esc(d.position)} · ${esc(driverName(d.Driver))}</b> <span class="subtle">(${esc(d.Constructor?.name || '')})</span></div>
              <span class="pill">${(() => {
                const n = stints[0]?.source === 'OPENF1' ? stints.length - 1 : dStops.length;
                return `${n} ${n === 1 ? 'смена шин' : n >= 2 && n <= 4 ? 'смены шин' : 'смен шин'}`;
              })()}</span>
            </div>
            <div class="stint-track-proportional">
              ${stints.map(st => {
                const pct = ((st.laps / totalLaps) * 100).toFixed(1);
                const isUnavail = st.compound === 'UNAVAILABLE';
                const compClass = st.getCompoundBadgeClass();
                const compShort = st.getCompoundShortLabel();
                const segLabel = isUnavail ? `S${st.stintNumber} · ${compShort}` : `${compShort} · ${esc(st.compound)}`;
                const tooltip = `Отрезок ${st.stintNumber}: ${st.startLap}–${st.endLap} кр. (${st.laps} кр.) [Состав шин: ${isUnavail ? 'Нет данных' : st.compound}]`;
                const pitPct = Math.min(100, Math.max(0, (st.endLap / totalLaps) * 100)).toFixed(1);
                const pitCallout = st.pitDuration ? `<div class="pit-callout" style="left: ${pitPct}%;" title="Пит-стоп: ${esc(st.pitDuration)}с"><span class="pit-badge">⏱ ${esc(st.pitDuration)}s</span></div>` : '';

                return `
                  <div class="stint-segment ${compClass}" data-stint="${st.stintNumber}" data-compound="${esc(st.compound)}" data-laps="${st.laps}" style="width: ${pct}%" title="${esc(tooltip)}">
                    ${segLabel} <small style="font-size:12px;opacity:0.85">(${st.laps} кр.)</small>
                  </div>
                  ${pitCallout}
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
    <div id="strategyTeammateDeltaBox">${renderTeammateStintDeltaHtml(results, adaptedData, season, openF1Stints, window._lastRaceLapsModel || null)}</div>
  `;
}

async function loadRaceControlEvents(season, race) {
  const session = await findOpenF1Session(season, race);
  if (!session) return { status: 'UNAVAILABLE', events: [] };
  const sKey = String(session.session_key);
  if (_openF1RcBySession.has(sKey)) return _openF1RcBySession.get(sKey);

  const p = (async () => {
    const messages = await openF1Get(`race_control?session_key=${session.session_key}`);
  const events = [];
  messages.forEach(m => {
    const text = String(m.message || '').toUpperCase();
    let rc = null;
    if (m.category === 'SafetyCar' && text.includes('VIRTUAL SAFETY CAR DEPLOYED')) rc = 'VSC';
    else if (m.category === 'SafetyCar' && text.includes('SAFETY CAR DEPLOYED')) rc = 'SC';
    else if (m.category === 'Flag' && m.flag === 'RED') rc = 'RED';
    if (!rc) return;
    const lap = Number.isFinite(Number(m.lap_number)) && m.lap_number !== null ? Number(m.lap_number) : null;
    events.push({
      lap,
      type: rc === 'SC' ? 'SAFETY_CAR' : rc === 'VSC' ? 'VSC' : 'RED_FLAG',
      rcCategory: rc,
      badge: rc === 'SC' ? 't-badge-sc' : rc === 'VSC' ? 't-badge-vsc' : 't-badge-red',
      title: rc === 'SC' ? 'Safety Car: выезд автомобиля безопасности'
        : rc === 'VSC' ? 'Virtual Safety Car: режим виртуальной машины безопасности'
        : 'Красный флаг: гонка остановлена',
      desc: `Дирекция гонки (OpenF1): ${m.message}`,
      turn: null,
      progress: null,
      locationStatus: 'UNAVAILABLE'
    });
  });
    events.push(...stewardEvents(messages));
    return { status: 'OK', events };
  })().catch(err => {
    _openF1RcBySession.delete(sKey);
    throw err;
  });
  _openF1RcBySession.set(sKey, p);
  return p;
}

function teamCarUrl(constructor, season) {
  const cId = typeof constructor === 'string' ? constructor : constructor?.constructorId;
  let slug = TEAM_LOGO_SLUGS[cId];
  if (!slug || !/^\d{4}$/.test(String(season))) return null;
  if (slug === 'kicksauber' && Number(season) >= 2026) slug = 'audi';
  return `https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:${season}:fallback:car:${season}fallbackcarright.webp/v1740000001/common/f1/${season}/${slug}/${season}${slug}carright.webp`;
}

async function fillTeamLeadersPane(id, season) {
  const box = $('#teamLeaders');
  if (!box || Number(season) !== CURRENT_SEASON) return;
  try {
    const entry = await TeamLeaders.load(id);
    if (!box.isConnected) return;
    box.innerHTML = TeamLeaders.heroHtml(entry.list);
    box.closest('.dp-hero')?.classList.toggle('has-leaders', entry.list.length > 0);
  } catch { /* no network or no wiki data: the hero simply stays without portraits */ }
}

async function fillTeamPitPane(id, season, races) {
  const box = $('#teamPitPane');
  if (!box) return;
  if (season < 2012) { box.innerHTML = '<div class="empty">Нет данных: пит-стопы публикуются с 2012 года.</div>'; return; }
  try {
    const pr = await buildPitRanking(season, races);
    if (!box.isConnected) return;
    const me = pr.rows.find(x => x.id === id);
    box.innerHTML = `
      ${me ? `<div class="stat-grid">
        <div class="stat"><b>P${me.rank}<small>/${pr.rows.length}</small></b><span>место среди команд</span></div>
        <div class="stat"><b>${me.median.toFixed(2)}</b><span>медиана, с</span></div>
        <div class="stat"><b>${me.best.sec.toFixed(2)}</b><span>лучший, с</span></div>
        <div class="stat"><b>${me.count}</b><span>стопов учтено</span></div>
      </div>
      <p class="subtle" style="font-size:12px;margin:8px 0 0">Лучший стоп команды: ${esc(me.best.driver)}, ${esc(me.best.raceName || '')}, круг ${esc(me.best.lap)}.</p>` : '<div class="empty">У этой команды нет учтённых пит-стопов в сезоне.</div>'}
      <h3 class="dp-h">Все команды сезона ${season}</h3>
      ${pitFailNote(pr)}${pitRankingHtml(pr, id)}`;
  } catch {
    if (box.isConnected) box.innerHTML = '<div class="empty">Не удалось загрузить пит-стопы: Jolpica не ответила.</div>';
  }
}

function computeTeamSeasonStats(teamId, resultRounds, qualRounds) {
  const st = { races: 0, wins: 0, podiums: 0, fastest: 0, dnf: 0, best: null, poles: 0, rows: [] };
  (resultRounds || []).slice().sort((a, b) => a.round - b.round).forEach(rr => {
    const cars = (rr.race?.Results || []).filter(x => x.Constructor?.constructorId === teamId);
    if (!cars.length) return;
    st.races++;
    cars.forEach(x => {
      const pos = Number(x.position);
      if (pos === 1) st.wins++;
      if (pos >= 1 && pos <= 3) st.podiums++;
      if (isOfficialFastestLap(x)) st.fastest++;
      if (isActualDnf(x.status)) st.dnf++;
      else if (pos >= 1 && (st.best === null || pos < st.best)) st.best = pos;
    });
    st.rows.push({
      round: rr.round, raceName: rr.raceName,
      cars: cars.map(x => ({ name: x.Driver.familyName, code: x.Driver.code, pos: Number(x.position), dnf: isActualDnf(x.status) })),
      points: cars.reduce((a, x) => a + (Number(x.points) || 0), 0)
    });
  });
  (qualRounds || []).forEach(q => {
    (q.race?.QualifyingResults || []).forEach(x => { if (x.position === '1' && x.Constructor?.constructorId === teamId) st.poles++; });
  });
  return st;
}

async function fillTeamSeasonPane(id, season, races, standing) {
  const logBox = $('#teamRaceLog');
  try {
    const [res, qual] = await Promise.all([
      loadSeasonRoundData(season, races, 'results'),
      loadSeasonRoundData(season, races, 'qualifying').catch(() => ({ rounds: [], failed: 1 }))
    ]);
    const st = computeTeamSeasonStats(id, res.rounds, qual.rounds);
    const qualCovered = !qual.failed && qual.rounds.length >= res.rounds.length;
    const grid = $('#teamSeasonStats');
    if (grid?.isConnected) {
      grid.innerHTML = `
        <div class="stat"><b>P${esc(standing.position)}</b><span>место в КК</span></div>
        <div class="stat"><b>${fmtNum(standing.points)}</b><span>очки команды</span></div>
        <div class="stat"><b>${fmtNum(standing.wins)}</b><span>победы</span></div>
        <div class="stat"><b>${st.podiums}</b><span>подиумов (по машинам)</span></div>
        <div class="stat"><b>${qualCovered ? st.poles : '—'}</b><span>поулов</span></div>
        <div class="stat"><b>${st.fastest}</b><span>лучших кругов</span></div>
        <div class="stat"><b>${st.dnf}</b><span>сходов (DNF)</span></div>
        <div class="stat"><b>${st.best ? 'P' + st.best : '—'}</b><span>лучший финиш</span></div>`;
    }
    if (!logBox?.isConnected) return;
    if (!st.rows.length) { logBox.innerHTML = '<div class="empty">Результаты этапов сезона пока недоступны.</div>'; return; }
    logBox.innerHTML = `${res.failed ? `<p class="subtle" style="font-size:12px;color:var(--amber, #ffb800)">Не удалось загрузить этапов: ${res.failed}. Цифры могут быть неполными.</p>` : ''}
      <div class="table-wrap"><table class="career-table">
        <thead><tr><th>Этап</th><th>Гран-при</th><th>Финиш машин</th><th class="num">Очки</th></tr></thead>
        <tbody>${st.rows.map(r => `<tr data-race="${esc(r.round)}" data-season="${esc(season)}" tabindex="0">
          <td>${esc(r.round)}</td>
          <td><b>${esc(ruGP(r.raceName, true))}</b></td>
          <td>${r.cars.map(c => `<span class="car-fin" title="${esc(c.name)}"><i>${esc(c.code || c.name.slice(0, 3).toUpperCase())}</i> <span class="pos-badge ${c.pos === 1 ? 'p1' : c.pos === 2 ? 'p2' : c.pos === 3 ? 'p3' : ''}">${c.dnf ? '✕' : c.pos}</span></span>`).join(' ')}</td>
          <td class="num"><b>${fmtNum(r.points)}</b></td>
        </tr>`).join('')}</tbody></table></div>
      <p class="subtle" style="font-size:12px;margin:10px 0 0">Очки в таблице — только за гонки (без спринтов), поэтому сумма может быть меньше очков в зачёте. Поулы, подиумы и лучшие круги считаются по результатам этапов. Источник: Jolpica F1.</p>`;
  } catch {
    if (logBox?.isConnected) logBox.innerHTML = '<div class="empty">Не удалось загрузить результаты этапов: Jolpica не ответила.</div>';
  }
}

function loadTeamHistory(teamId) {
  if (_teamHistoryCache.has(teamId)) return _teamHistoryCache.get(teamId);
  const task = (async () => {
    const total = async path => Number((await request(path)).data.MRData.total);
    const [seasonsRes, races, wins, p2, p3, fastest] = await Promise.all([
      request(`constructors/${teamId}/seasons.json?limit=100`),
      total(`constructors/${teamId}/races.json?limit=1`).catch(() => null),
      total(`constructors/${teamId}/results/1.json?limit=1`).catch(() => null),
      total(`constructors/${teamId}/results/2.json?limit=1`).catch(() => null),
      total(`constructors/${teamId}/results/3.json?limit=1`).catch(() => null),
      total(`constructors/${teamId}/fastest/1/results.json?limit=1`).catch(() => null)
    ]);
    const years = (seasonsRes.data.MRData.SeasonTable?.Seasons || []).map(x => Number(x.season)).sort((a, b) => a - b);
    if (!years.length) throw new Error('no seasons');
    const titles = (getEmbeddedSnapshot()?.endpoints?.['champions.json']?.constructors || [])
      .filter(x => x.constructor?.constructorId === teamId).map(x => x.season).sort((a, b) => a - b);
    const recentYears = years.filter(y => y >= 2016);
    const recent = (await mapLimit(recentYears, 3, async y => {
      const res = (isLiveSeasonPath(String(y)) ? null : readSnapshot(`${y}/constructorstandings.json`)) || await request(`${y}/constructorstandings.json`);
      const row = res ? readTeams(res.data).find(x => x.Constructor.constructorId === teamId) : null;
      return row ? { season: y, pos: Number(row.position) || null, pts: Number(row.points), wins: Number(row.wins) } : null;
    })).filter(Boolean);
    return {
      first: years[0], seasons: years.length, titles, recent,
      totals: { races, wins, podiums: wins !== null && p2 !== null && p3 !== null ? wins + p2 + p3 : null, fastest }
    };
  })();
  task.catch(() => _teamHistoryCache.delete(teamId));
  _teamHistoryCache.set(teamId, task);
  return task;
}

async function fillTeamHistoryPane(id, c, pal) {
  const box = $('#teamHistoryPane');
  if (!box) return;
  try {
    const h = await loadTeamHistory(id);
    if (!box.isConnected) return;
    const n = v => (v === null || v === undefined ? '—' : fmtNum(v));
    box.innerHTML = `
      <div class="dp-titles ${h.titles.length ? 'has' : ''}">
        ${h.titles.length
          ? `<span class="dp-trophy">${uiIcon('trophy')}</span><div><b>${h.titles.length}× чемпион конструкторов</b><small>${h.titles.join(' · ')}</small></div>`
          : `<div><b>В Формуле‑1 с ${h.first} года</b><small>${h.seasons} ${ruPlural(h.seasons, ['сезон', 'сезона', 'сезонов'])} в чемпионате под названием «${esc(c.name)}»</small></div>`}
      </div>
      <div class="stat-grid dp-totals">
        <div class="stat"><b>${n(h.totals.races)}</b><span>гонок</span></div>
        <div class="stat"><b>${n(h.totals.wins)}</b><span>побед</span></div>
        <div class="stat"><b>${n(h.totals.podiums)}</b><span>подиумов (по машинам)</span></div>
        <div class="stat"><b>${n(h.totals.fastest)}</b><span>лучших кругов</span></div>
        <div class="stat"><b>${h.first}</b><span>первый сезон</span></div>
        <div class="stat"><b>${h.seasons}</b><span>${ruPlural(h.seasons, ['сезон', 'сезона', 'сезонов'])} в чемпионате</span></div>
      </div>
      ${h.recent.length ? `<h3 class="dp-h">Последние сезоны</h3>
      <div class="table-wrap"><table class="career-table">
        <thead><tr><th>Сезон</th><th class="num">Место</th><th class="num">Очки</th><th class="num col-wins">Победы</th></tr></thead>
        <tbody>${h.recent.slice().reverse().map(s => `<tr class="${s.pos === 1 ? 'champ-row' : ''}" data-team="${esc(id)}" data-season="${s.season}" tabindex="0">
          <td><b>${s.season}</b></td>
          <td class="num">${s.pos === 1 ? uiIcon('trophy') + ' ' : ''}${s.pos ? 'P' + s.pos : '—'}</td>
          <td class="num"><b>${fmtNum(s.pts)}</b></td>
          <td class="num col-wins">${fmtNum(s.wins)}</td>
        </tr>`).join('')}</tbody></table></div>` : ''}
      <p class="subtle" style="font-size:12px;margin:14px 0 0">Jolpica ведёт историю под тем названием, которое у команды сейчас; её предшественники (например, Toro Rosso и AlphaTauri для Racing Bulls) учтены отдельно, поэтому цифры считаются только за этот период. Кубок конструкторов разыгрывается с 1958 года. Подиумы — по машинам: два автомобиля на подиуме одной гонки дают два. Источник: Jolpica F1.</p>`;
  } catch {
    if (box.isConnected) box.innerHTML = '<div class="empty">История команды недоступна: Jolpica не вернула данные.</div>';
  }
}

function teamHeroHtml({ c, pal, season, t }) {
  const flag = flagOf(c.nationality);
  const carUrl = teamCarUrl(c, season);
  return `<div class="dp-hero team-hero${Number(season) === CURRENT_SEASON && TeamLeaders.cached(c.constructorId)?.list?.length ? ' has-leaders' : ''}">
    <span class="hud-corner tl" aria-hidden="true"></span><span class="hud-corner tr" aria-hidden="true"></span><span class="hud-corner bl" aria-hidden="true"></span><span class="hud-corner br" aria-hidden="true"></span>
    <span class="dp-stripe"></span>
    <div class="dp-bignum" aria-hidden="true">P${esc(t.position)}</div>
    ${carUrl ? `<img class="dp-car" src="${carUrl}" alt="${esc(c.name)}" width="640" height="224" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : ''}
    <div class="dp-id">
      ${teamLogoHtml(c, season).replace('class="team-logo"', 'class="team-logo lg"')}
      <div class="dp-name">
        <div class="dp-team"><i></i>Кубок конструкторов · сезон ${season}</div>
        <h2>${esc(c.name)}</h2>
        <div class="dp-meta">${flag ? `<span class="dp-flag">${flag}</span>` : ''}${esc(ruNat(c.nationality) || '')}</div>
        ${Number(season) === CURRENT_SEASON ? `<div class="dp-leaders" id="teamLeaders">${TeamLeaders.heroHtml(TeamLeaders.cached(c.constructorId)?.list)}</div>` : ''}
      </div>
    </div>
    ${Favs.button('team', c.constructorId, true)}
    <div class="dp-signature">
      <div class="dp-plate" title="Место в Кубке конструкторов"><small>P</small><b>${esc(t.position)}</b></div>
      <div class="dp-code"><b>${fmtNum(t.points)}</b><small>очки</small></div>
      <div class="dp-code"><b>${fmtNum(t.wins)}</b><small>победы</small></div>
    </div>
    <div class="dp-palette" title="Палитра команды ${esc(c.name)}"><i style="background:${pal.p}"></i><i style="background:${pal.s}"></i><i style="background:${pal.a}"></i></div>
  </div>`;
}

function populateCircuitFilters() {
  const entries = Object.entries(TRACK_REGISTRY).map(([id, x]) => ({ id, ...x }));
  const seasons = [...new Set(entries.flatMap(x => x.seasons || []))].sort((a, b) => b - a);
  const countries = [...new Set(entries.map(x => x.country).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'ru'));

  $('#circuitSeasonFilter').innerHTML = '<option value="">Все сезоны</option>' +
    seasons.map(y => `<option value="${y}">${y}</option>`).join('');
  $('#circuitCountryFilter').innerHTML = '<option value="">Все страны</option>' +
    countries.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');

  const search = $('#circuitSearch');
  if (search) search.placeholder = `Поиск среди ${entries.length} ${ruPlural(entries.length, ['автодрома', 'автодромов', 'автодромов'])}…`;
  const availableCount = entries.filter(x => {
    const st = getCircuitAssetStatus(x.id);
    return st.status === 'AVAILABLE';
  }).length;
  const imgPct = entries.length ? Math.round((availableCount / entries.length) * 100) : 0;
  if ($('#circuitImageCount')) $('#circuitImageCount').textContent = `${imgPct}%`;
}

async function showCircuit(id) {
  WinSeq.next();
  if (!SnapshotStore.allDone) await SnapshotStore.whenAll();
  const canonId = TRACK_ALIASES[id] || id;
  const entry = TRACK_REGISTRY[canonId] || {
    name: canonId, country: 'F1', locality: '', seasons: [], turns: 14, lengthKm: 5.0,
    lapRecord: 'N/A', recordHolder: 'N/A', recordTeam: 'N/A', recordYear: 2024
  };

  openModal(
    `<h2>${esc(entry.name)}</h2><p class="subtle">${entry.locality ? esc(entry.locality) + ', ' : ''}${esc(entry.country)}</p>`,
    '<div class="loading">Загрузка векторной схемы, поворотов, рекордов круга и метеосводки…</div>'
  );

  const turns = CIRCUIT_TURNS[canonId] || [];
  const embeddedPath = CIRCUIT_PATHS[canonId] || null;

  let svgContent = '';
  if (embeddedPath) {
    const turnMarkersSvg = turns.map((t, idx) => `
      <g class="turn-marker-wrapper" transform="translate(${(t.x * 500).toFixed(1)}, ${(t.y * 500).toFixed(1)})">
        <g class="turn-marker" data-turn="${t.number}" data-sector="${t.sector}" style="--marker-idx:${idx}" tabindex="0" role="group" aria-label="Поворот ${t.number}: ${esc(t.name)}">
          <rect x="-22" y="-22" width="44" height="44" class="turn-hitbox"/>
          <circle cx="0" cy="0" r="11" class="turn-bg"/>
          <text x="0" y="3.5" text-anchor="middle">${t.number}</text>
        </g>
      </g>
    `).join('');

    svgContent = `
      <div class="circuit-viewport" id="circuitViewport">
        <svg viewBox="0 0 500 500" class="circuit-svg-layer" id="circuitSvg">
          <path d="${embeddedPath}" class="track-base-path"/>
          <g id="turnsLayer">${turnMarkersSvg}</g>
        </svg>
      </div>
      <div class="lap-hud" id="circuitLapHud"></div>

    `;
  } else {
    svgContent = trackImg({ circuitId: canonId, circuitName: entry.name }, 'track-hero');
  }

  const turnsListHtml = turns.length ? `
    <h3 style="margin-top:22px">Схема поворотов (${turns.length})</h3>
    <div class="turn-list" id="turnList">
      ${turns.map(t => `
        <div class="turn-item" data-turn="${t.number}">
          <div>
            <b>T${t.number}</b> · ${esc(t.name)}
            <div class="subtle" style="font-size:12px">Сектор ${t.sector}${t.speedKph ? ` · ${t.speedKph} км/ч · G${t.gear}` : ''}</div>
          </div>
          ${t.drs ? '<span class="pill" style="color:var(--green)">DRS</span>' : ''}
        </div>
      `).join('')}
    </div>
  ` : `<p class="subtle" style="margin-top:14px">${_RAW_CIRCUIT_SECTORS[canonId]?.source ? 'Контур измерен по телеметрии OpenF1.' : 'Нет данных о поворотах.'}</p>`;

  const isSimRecord = (entry.lapRecordProvenance === 'SIMULATION') ||
                      (entry.recordSession && entry.recordSession.toLowerCase().includes('simulat')) ||
                      (entry.recordHolder && entry.recordHolder.toLowerCase().includes('симуляц')) ||
                      (entry.recordHolder && entry.recordHolder.toLowerCase().includes('projected'));
  const isSimQual = (entry.allTimeRecordProvenance === 'SIMULATION') ||
                    (entry.allTimeRecord && entry.allTimeRecord.toLowerCase().includes('simulat'));
  // рекорд квалификации записан одной строкой «1:15.915, пилот (команда, год)»: время и пилот показываются отдельно, как у рекорда гонки
  const qm = /^\s*([\d:.]+)\s*,\s*(.+)$/.exec(String(entry.allTimeRecord || ''));
  const qTime = qm ? qm[1] : (entry.allTimeRecord || '—'), qWho = qm ? qm[2] : '';
  const recordsCardHtml = `
    <div class="circuit-records-card">
      <div class="record-item">
        <span class="record-title">${isSimRecord ? '<span class="prov-badge prov-demo">ПРОЕКТНАЯ СИМУЛЯЦИЯ РЕКОРДА</span>' : '<span class="record-k">Рекорд круга в гонке</span>'}</span>
        <div class="record-time">${esc(entry.lapRecord || '—')}</div>
        <div class="record-driver">${esc(entry.recordHolder || 'Нет данных')}${entry.recordTeam || entry.recordYear ? ` <span class="subtle">· ${esc([entry.recordTeam, entry.recordYear].filter(Boolean).join(', '))}</span>` : ''}</div>
      </div>
      <div class="record-item">
        <span class="record-title">${isSimQual ? '<span class="prov-badge prov-sim">ПРОЕКТНАЯ СИМУЛЯЦИЯ ПОУЛА</span>' : '<span class="record-k">Рекорд квалификации</span>'}</span>
        <div class="record-time">${esc(qTime)}</div>
        ${qWho ? `<div class="record-driver">${esc(qWho)}</div>` : ''}
        <div class="record-session subtle">Текущая конфигурация трассы</div>
      </div>
    </div>
  `;

  const weatherCardHtml = `
    <div class="circuit-weather-card" id="circuitWeatherBox">
      <div class="loading">Загрузка метеоданных автодрома с Open-Meteo API…</div>
    </div>
  `;

  const modalBody = `
    <div class="modal-tabs" role="tablist">
      <button class="modal-tab active" role="tab" data-pane="track">Схема</button>
      <button class="modal-tab" role="tab" data-pane="telemetry">Телеметрия</button>
      <button class="modal-tab" role="tab" data-pane="history">История Гран-при</button>
    </div>

    <section class="modal-pane" data-pane="track" id="mTabTrackView">
      <div class="stat-grid" style="margin-bottom:16px">
        <div class="stat"><b>${entry.turns}</b><span>поворотов</span></div>
        <div class="stat"><b>${entry.lengthKm} км</b><span>длина круга</span></div>
        <div class="stat"><b>${esc(entry.firstGpYear || '—')}</b><span>первый Гран-при F1</span></div>
        <div class="stat"><b>${entry.drsZones || '—'}</b><span>зоны DRS</span></div>
      </div>
      ${svgContent}
      ${recordsCardHtml}
      ${weatherCardHtml}
      ${turnsListHtml}
    </section>
    <section class="modal-pane" data-pane="telemetry">
      <div id="circuitTelemetryBox"><div class="loading">Поиск последней гонки на трассе и загрузка телеметрии (OpenF1)…</div></div>
    </section>
    <section class="modal-pane" data-pane="history" id="mTabTrackHistory">
      <div id="circuitHistoryBox"><div class="loading">Загрузка всех Гран-при на этой трассе…</div></div>
    </section>
  `;

  openModal(
    `<h2>${esc(entry.name)}</h2><p class="subtle">${entry.locality ? esc(entry.locality) + ', ' : ''}${esc(entry.country)}</p>`,
    modalBody
  );

  if (entry.lat && entry.lon) {
    loadCircuitWeatherUI(entry.lat, entry.lon, 'circuitWeatherBox');
  }
  if (embeddedPath) GhostLap.mount($('#circuitLapHud'), $('#circuitViewport'), canonId);     // no sector times: no button

  if (embeddedPath) {
    {
      $$('.turn-marker').forEach(m => {
        m.addEventListener('click', () => {
          const num = Number(m.dataset.turn);
          $$('.turn-marker').forEach(x => x.classList.toggle('active', x === m));
          $$('.turn-item').forEach(x => {
            const match = Number(x.dataset.turn) === num;
            x.classList.toggle('active', match);
            if (match) x.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          });
        });
      });

      $$('.turn-item').forEach(item => {
        item.addEventListener('click', () => {
          const num = Number(item.dataset.turn);
          $$('.turn-item').forEach(x => x.classList.toggle('active', x === item));
          $$('.turn-marker').forEach(x => {
            const match = Number(x.dataset.turn) === num;
            x.classList.toggle('active', match);
          });
        });
      });
    }
  }

  initModalTabs($('#modalBody'), {
    telemetry: () => loadCircuitTelemetry(canonId),
    history: () => loadCircuitHistoryUI(canonId)
  });
}

async function circuitRaces(canonId) {
  const apiIds = [canonId, ...Object.keys(TRACK_ALIASES).filter(k => TRACK_ALIASES[k] === canonId && k !== canonId)];
  for (const cid of apiIds) {
    try {
      const races = readRaces((await request(`circuits/${cid}/results/1.json?limit=100`)).data);
      if (races.length) return races;
    } catch {}
  }
  return [];
}

async function loadCircuitTelemetry(canonId) {
  const box = $('#circuitTelemetryBox');
  try {
    const last = (await circuitRaces(canonId))
      .filter(r => Number(r.season) >= OPENF1_FIRST_SEASON && Date.parse(r.date) < Date.now())
      .at(-1);
    if (!box?.isConnected) return;
    if (!last) {
      box.innerHTML = '<div class="empty">На этой трассе не было гонок с 2023 года — OpenF1 не публикует более раннюю телеметрию.</div>';
      return;
    }
    const res = await request(`${last.season}/${last.round}/results.json`);
    const results = readRaces(res.data)[0]?.Results || [];
    const tel = await loadFastestLapTelemetry(last.season, last, results);
    if (!box.isConnected) return;
    renderTelemetry('circuitTelemetryBox', tel, `Лучший круг гонки ${last.season}`);
  } catch {
    if (box?.isConnected) renderTelemetry('circuitTelemetryBox', null);
  }
}

async function loadCircuitHistoryUI(canonId) {
  const container = $('#circuitHistoryBox');
  if (!container) return;
  try {
    const races = await circuitRaces(canonId);
    if (!container.isConnected) return;
    if (!races.length) {
      container.innerHTML = '<div class="empty">Jolpica не вернула этапов для этой трассы.</div>';
      return;
    }
    const wins = {};
    races.forEach(r => {
      const w = r.Results?.[0];
      if (w) wins[driverName(w.Driver)] = (wins[driverName(w.Driver)] || 0) + 1;
    });
    const topWinners = Object.entries(wins).sort((a, b) => b[1] - a[1]).slice(0, 3);
    const rows = races.slice().reverse().map(r => {
      const winner = r.Results?.[0];
      return `<div class="history-row">
        <b class="history-year">${esc(r.season)}</b>
        <div class="history-main">
          <strong>${esc(ruGP(r.raceName))}</strong>
          <div class="subtle" style="font-size:12px">${winner ? `${uiIcon('trophy')} ${esc(driverName(winner.Driver))} · ${esc(winner.Constructor?.name || '—')}` : 'Результат не опубликован'}</div>
        </div>
        ${Number(r.season) >= 1950 ? `<button class="btn secondary sm" data-race="${esc(r.round)}" data-season="${esc(r.season)}">Открыть</button>` : ''}
      </div>`;
    }).join('');
    container.innerHTML = `
      <div class="stat-grid" style="margin:10px 0 14px">
        <div class="stat"><b>${races.length}</b><span>Гран-при на трассе</span></div>
        <div class="stat"><b>${esc(races[0].season)}</b><span>первый этап</span></div>
        ${topWinners.map(([n, c]) => `<div class="stat"><b>${c}</b><span>побед: ${esc(n)}</span></div>`).join('')}
      </div>
      <div class="history-list">${rows}</div>`;
  } catch {
    if (container.isConnected) container.innerHTML = '<div class="error-box">Не удалось загрузить историю этапов. Проверьте сеть.</div>';
  }
}

function roundsSignature(rounds) {
  return [...rounds.values()].sort((a, b) => a.round - b.round).map(x => `${x.round}:${x.race?.position || ''}/${x.race?.points || ''}/${x.qual?.position || ''}`).join(',');
}

async function computeTeammateBattle(season, driverId, standings, signal = null) {
  const carOf = x => (x?.race || x?.qual)?.Constructor?.constructorId;
  const myRounds = await loadDriverSeasonRounds(season, driverId, signal);
  const myTeams = new Set([...myRounds.values()].map(carOf).filter(Boolean));
  const found = new Map((standings || []).filter(d => (d.Constructors || []).some(c => myTeams.has(c.constructorId))).map(d => [d.Driver?.driverId, d.Driver]));
  for (const team of myTeams) {
    const stint = [...myRounds.entries()].filter(([, x]) => carOf(x) === team).map(([round]) => round);
    for (const round of new Set([stint[0], stint.at(-1)])) {
      try {
        const res = await request(`${season}/${round}/results.json`, { signal });
        readRaces(res.data).forEach(rc => (rc.Results || []).forEach(x => {
          if (x.Constructor?.constructorId === team && x.Driver?.driverId) found.set(x.Driver.driverId, x.Driver);
        }));
      } catch {}
    }
  }
  found.delete(driverId);
  const candidates = [...found.entries()].filter(([tmId]) => tmId).map(([tmId, drv]) =>
    (standings || []).find(d => d.Driver?.driverId === tmId) || { Driver: drv, points: '0' });
  let best = null;
  for (const cand of candidates) {
    const tmRounds = await loadDriverSeasonRounds(season, cand.Driver.driverId, signal);
    const duel = { standing: cand, shared: 0, qA: 0, qB: 0, rA: 0, rB: 0 };
    myRounds.forEach((mine, round) => {
      const theirs = tmRounds.get(round);
      if (!theirs || carOf(mine) !== carOf(theirs)) return;
      duel.shared++;
      if (mine.qual && theirs.qual) Number(mine.qual.position) < Number(theirs.qual.position) ? duel.qA++ : duel.qB++;
      if (mine.race && theirs.race) Number(mine.race.position) < Number(theirs.race.position) ? duel.rA++ : duel.rB++;
    });
    if (duel.shared && (!best || duel.shared > best.shared)) best = duel;
  }
  return best;
}

function renderTeammateBattleHtml(teammateBattle, current, targetSeason) {
  const tm = teammateBattle?.standing;
  if (!tm) {
    return `
      <h3 style="margin-top:20px">Битва напарников (Teammate Battle)</h3>
      <div class="empty" style="padding:14px;background:var(--panel2);border-radius:10px;border:1px solid var(--line);font-size:12px">Данные напарника для текущего зачёта недоступны или пилот выступал без постоянного партнёра.</div>
    `;
  }
  const tmName = driverName(tm.Driver);
  const myPts = Number(current?.points) || 0;
  const tmPts = Number(tm.points) || 0;
  const totalTeamPts = myPts + tmPts;
  const pointsSharePct = totalTeamPts > 0 ? Math.round((myPts / totalTeamPts) * 100) : (myPts === 0 && tmPts === 0 ? 0 : 50);
  const { qA: myQualWins, qB: tmQualWins, rA: myRaceWins, rB: tmRaceWins, shared } = teammateBattle;

  return `
    <h3 style="margin-top:20px">Битва напарников (vs ${esc(tmName)}) <span class="subtle" style="font-size:12px;font-weight:600">· ${shared} ${ruPlural(shared, ['общий этап', 'общих этапа', 'общих этапов'])}</span></h3>
    <div class="h2h-container">
      <div class="h2h-card">
        <div class="h2h-title">Очки в сезоне ${targetSeason}</div>
        <div class="h2h-score">${myPts} — ${tmPts}</div>
        <div class="subtle" style="font-size:12px">Вклад в очки команды: <b>${pointsSharePct}%</b></div>
      </div>
      <div class="h2h-card">
        <div class="h2h-title">Квалификационная дуэль</div>
        <div class="h2h-score">${myQualWins} — ${tmQualWins}</div>
        <div class="subtle" style="font-size:12px">${myQualWins >= tmQualWins ? 'Впереди в квалификациях' : 'Позади напарника'}</div>
      </div>
      <div class="h2h-card">
        <div class="h2h-title">Финиш в гонках</div>
        <div class="h2h-score">${myRaceWins} — ${tmRaceWins}</div>
        <div class="subtle" style="font-size:12px">${myRaceWins >= tmRaceWins ? 'Чаще финиширует выше' : 'Позади напарника'}</div>
      </div>
    </div>
  `;
}

async function showDriver(id, season = state.season, { silent = false } = {}) {
  const winSeq = WinSeq.next();
  if (!SnapshotStore.allDone) await SnapshotStore.whenAll();
  const targetSeason = Number(season);
  Deep.next = { path: `driver/${encodeURIComponent(id)}/${targetSeason}`, t: Date.now() };
  // тихая перерисовка (пришли свежие данные сети): окно не мигает «Загрузкой», фото не пропадает
  if (!silent) openModal(
    '<h2>Загрузка профиля пилота…</h2>',
    '<div class="loading">Получение данных сезона и карьерной статистики пилота…</div>'
  );
  const modalCtrl = window._modalAbortController;
  // список фото пилотов (OpenF1) ждём параллельно с данными и недолго: не пришёл — фото добавит upgradeHeroPhoto
  const headshotsReady = Headshots.ready(QUICK_MS);

  try {
    const cleanId = String(id || '').trim().toLowerCase();
    const canonId = (typeof normalizeDriverId === 'function' ? normalizeDriverId(cleanId) : cleanId) || cleanId;
    const isDriverMatch = (dId) => {
      if (!dId) return false;
      const c = String(dId).trim().toLowerCase();
      if (c === cleanId || c === canonId) return true;
      if (typeof normalizeDriverId === 'function' && normalizeDriverId(c) === canonId) return true;
      return false;
    };

    let bundle = (state.season === targetSeason ? state.standings : null) ||
                 Object.values(state.pageData).find(x => x?.season === targetSeason && x.b?.drivers?.some(d => isDriverMatch(d.Driver?.driverId)))?.b;
    if (!bundle) {
      const snap = readSnapshot(`${targetSeason}/driverstandings.json`);
      if (snap?.data) bundle = { drivers: readDrivers(snap.data), season: targetSeason };
      else {
        try { bundle = await withTimeout(signal => loadSeasonBundle(targetSeason, { signal }), CONFIG.timeout); } catch {}
      }
    }
    if (!bundle && typeof getEmbeddedSnapshot === 'function') {
      const snap = getEmbeddedSnapshot();
      const payload = snap?.endpoints?.[`${targetSeason}/driverstandings.json`];
      if (payload) bundle = { drivers: readDrivers(payload), season: targetSeason };
    }
    const current = bundle?.drivers?.find(d => isDriverMatch(d.Driver?.driverId));

    const recentSeasons = [targetSeason, targetSeason - 1, targetSeason - 2].filter(y => y >= CONFIG.seasonStart);
    const driverKey = current?.Driver?.driverId || canonId;
    // окно рисуется сразу; если потом придут другие (более свежие) данные сети, оно перерисуется ими
    let shownSig = null;
    const refresh = () => {
      // перерисовываем, только если открыто всё то же окно этого пилота
      if (WinSeq.n !== winSeq || modalCtrl?.signal?.aborted || !$('#modal')?.classList.contains('open')) return;
      showDriver(id, season, { silent: true });
    };
    const quickStandings = y => {
      const path = `${y}/driverstandings.json`;
      const snap = readSnapshot(path);
      if (!isLiveSeasonPath(String(y))) return snap ? Promise.resolve(snap) : request(path, { signal: modalCtrl?.signal });
      const net = request(path, { signal: modalCtrl?.signal });
      if (!snap) return net;
      return Promise.race([net, new Promise(r => setTimeout(() => r(null), QUICK_MS))]).then(v => {
        if (v) return v;
        const mine = rows => readDrivers(rows?.data).find(d => isDriverMatch(d.Driver?.driverId));
        net.then(fresh => { const a = mine(fresh), b = mine(snap); if (a && (a.points !== b?.points || a.position !== b?.position)) refresh(); }).catch(() => {});
        return snap;
      });
    };
    const [roundsSettled, ...careerSettled] = await Promise.allSettled([
      loadDriverSeasonRounds(targetSeason, driverKey, modalCtrl?.signal, {
        quick: true,
        onFresh: net => { if (shownSig !== null && roundsSignature(net) !== shownSig) refresh(); }
      }),
      ...recentSeasons.map(quickStandings)
    ]);

    if (modalCtrl?.signal?.aborted || !$('#modal')?.classList.contains('open')) return;

    if (roundsSettled.status === 'rejected') throw roundsSettled.reason;
    shownSig = roundsSignature(roundsSettled.value);
    const seasonRounds = [...roundsSettled.value.values()].sort((x, y) => x.round - y.round);
    let raceResults = seasonRounds.filter(x => x.race).map(x => ({ ...x.race, raceName: x.raceName, round: x.round, date: x.date }));
    let qualResults = seasonRounds.filter(x => x.qual).map(x => ({ ...x.qual, raceName: x.raceName, round: x.round }));

    const finishes = raceResults.map(x => Number(x.position)).filter(Number.isFinite);
    const calculatedWins = raceResults.filter(x => x.position === '1').length;
    const calculatedPodiums = raceResults.filter(x => ['1', '2', '3'].includes(String(x.position))).length;
    const calculatedFastest = raceResults.filter(isOfficialFastestLap).length;
    const calculatedPoles = qualResults.filter(x => x.position === '1').length;
    const calculatedAvg = finishes.length ? (finishes.reduce((a, b) => a + b, 0) / finishes.length).toFixed(1) : '—';
    const calculatedDnfs = raceResults.filter(x => x.status && x.status !== 'Finished' && !/^\+\d+ Laps?$/.test(x.status) && x.status !== 'Lapped').length;

    // every number here is counted from the round results (snapshot or Jolpica); nothing is typed in by hand
    const standingsWins = Number(current?.wins) || 0;
    const wins = Math.max(standingsWins, calculatedWins);
    const podiums = calculatedPodiums;
    const poles = calculatedPoles;
    const fastest = calculatedFastest;
    const avg = calculatedAvg;
    const dnfs = calculatedDnfs;

    let careerRows = careerSettled.map((x, i) => {
      if (x.status !== 'fulfilled') return null;
      const d = readDrivers(x.value.data).find(row => isDriverMatch(row.Driver?.driverId));
      return d ? {
        season: recentSeasons[i],
        pos: d.position,
        pts: d.points,
        team: d.Constructors?.[0]?.name || '—'
      } : null;
    }).filter(Boolean).sort((a, b) => Number(b.season) - Number(a.season));

    if (!careerRows.length) {
      const hist = (typeof DRIVER_CAREER_PROGRESSION !== 'undefined' &&
                    (DRIVER_CAREER_PROGRESSION[canonId] || DRIVER_CAREER_PROGRESSION[cleanId])) || [];
      if (hist.length) {
        careerRows = hist
          .filter(h => h && h.season && h.pos !== null && h.pts !== null && h.season <= targetSeason)
          .map(h => ({
            season: h.season,
            pos: h.pos,
            pts: h.pts,
            team: h.team || '—'
          }))
          .sort((a, b) => Number(b.season) - Number(a.season))
          .slice(0, 5);
      }
    }

    const driverObj = current?.Driver || raceResults[0]?.Driver || { givenName: id, familyName: '' };
    const teamName = current?.Constructors?.[0]?.name || raceResults[0]?.Constructor?.name || '—';
    const color = teamColor(teamName);

    const careerHtml = careerRows.length ? `
      <h3 style="margin-top:22px">История сезонов</h3>
      <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:8px">
        ${careerRows.map(c => `
          <div style="min-width:105px;padding:10px;border:1px solid var(--line);border-radius:10px;background:var(--panel2);text-align:center">
            <b style="color:var(--red2);font-size:1.1rem">${esc(c.season)}</b>
            <div style="font-size:13px;font-weight:800;margin:3px 0">P${esc(c.pos)} · ${fmtNum(c.pts)}</div>
            <div class="subtle" style="font-size:12px">${esc(c.team)}</div>
          </div>
        `).join('')}
      </div>
    ` : '';

    let formPillsHtml = raceResults.slice(-5).reverse().map(r => {
      const p = Number(r.position);
      const cls = p === 1 ? 'p1' : p <= 3 ? 'podium' : p <= 10 ? 'points' : r.status !== 'Finished' ? 'dnf' : '';
      return `<span class="form-pill ${cls}" title="${esc(r.raceName || '')}: P${p}">P${p || '—'}</span>`;
    }).join('');

    if (!formPillsHtml) {
      formPillsHtml = '<span class="subtle">Нет данных</span>';
    }

    const pal = teamPalette(teamName);
    const traits = computeDriverTraits(targetSeason);
    const trait = traits?.[driverObj.driverId] || null;
    await headshotsReady;
    if (modalCtrl?.signal?.aborted || !$('#modal')?.classList.contains('open')) return;
    const photo = Headshots.url(driverObj.code, 4);
    // напарник: другой пилот той же команды в зачёте сезона (у кого больше очков, если их несколько)
    const teamId = current?.Constructors?.[0]?.constructorId;
    const mate = teamId ? (bundle?.drivers || []).find(x => x.Driver?.driverId !== driverObj.driverId && x.Constructors?.[0]?.constructorId === teamId)?.Driver || null : null;
    const canCompare = Boolean(current && bundle?.drivers?.length > 1);
    // фото болида команды для фона шапки: только на сайте и только для своего сезона (scripts/build_car_photos.py)
    const carSet = SITE?.cars?.[String(targetSeason)];
    const carPick = teamId && carSet?.cars?.[teamId];
    const carBg = carPick ? { src: `${SITE.base}${carSet.dir}${teamId}-1280.webp`, small: `${SITE.base}${carSet.dir}${teamId}-640.webp`, ...carPick } : null;
    const keep = silent ? { top: $('#modalBox')?.scrollTop || 0, pane: $('#modalBody .modal-tab.active')?.dataset.pane } : null;
    openModal(
      `<h2>${esc(driverName(driverObj))}</h2><p class="subtle">${esc(teamName)} · Сезон ${targetSeason}</p>`,
      `<div class="dp" style="--tp:${pal.p};--ts:${pal.s};--ta:${pal.a};--tc:${pal.tc}">
      ${driverHeroHtml({ d: driverObj, teamName, pal, season: targetSeason, trait, favId: driverObj.driverId || id, photo, carBg, mate, compare: canCompare })}
      <div class="modal-tabs" role="tablist">
        <button class="modal-tab active" role="tab" data-pane="overview">Сезон ${targetSeason}</button>
        <button class="modal-tab" role="tab" data-pane="log">Этапы</button>
        <button class="modal-tab" role="tab" data-pane="career">Карьера</button>
      </div>
      <section class="modal-pane" data-pane="overview">
      <div class="stat-grid">
        <div class="stat"><b class="countup" data-val="${current ? Number(current.points) : (raceResults.reduce((s, x) => s + (Number(x.points) || 0), 0) || (verified?.pts || 0))}">${current ? fmtNum(current.points) : fmtNum(raceResults.reduce((s, x) => s + (Number(x.points) || 0), 0) || (verified?.pts || 0))}</b><span>очки (${targetSeason})</span></div>
        <div class="stat"><b>${current ? 'P' + esc(current.position) : (verified?.pos ? 'P' + verified.pos : '—')}</b><span>место в зачёте</span></div>
        <div class="stat"><b class="countup" data-val="${wins}">${wins}</b><span>победы</span></div>
        <div class="stat"><b class="countup" data-val="${podiums}">${podiums}</b><span>подиумы</span></div>
        <div class="stat"><b class="countup" data-val="${poles}">${poles}</b><span>поулы</span></div>
        <div class="stat"><b class="countup" data-val="${fastest}">${fastest}</b><span>лучшие круги</span></div>
        <div class="stat"><b>${avg}</b><span>средний финиш</span></div>
        <div class="stat"><b>${dnfs}</b><span>сходы (DNF)</span></div>
      </div>
      ${(() => { const rd = driverRadarData(targetSeason, driverObj.driverId); return rd ? `<h3 style="margin-top:20px">Профиль сезона ${targetSeason}</h3>${driverRadarHtml(rd, pal.p)}` : ''; })()}
      <!-- Driver Form (Last 5 races) -->
      <h3 style="margin-top:20px">Форма пилота (последние этапы)</h3>
      <div class="form-pills">
        ${formPillsHtml}
      </div>

      <!-- Teammate Battle (H2H): filled asynchronously -->
      <div id="teammateBattleBox"><h3 style="margin-top:20px">Битва напарников (Teammate Battle)</h3><div class="loading" style="padding:14px">Сравнение с напарником по этапам…</div></div>

            <div class="driver-progression-box">
        <div class="section-header-compact">
          <h3 class="h4">${uiIcon('chart')} Динамика по сезонам <span class="prov-badge prov-api">JOLPICA F1</span></h3>
          <div class="prog-tabs">
            <button class="prog-tab-btn active" data-metric="points">Очки</button>
            <button class="prog-tab-btn" data-metric="position">Место в зачете</button>
            <button class="prog-tab-btn" data-metric="wins">Победы</button>
          </div>
        </div>
        <div style="height:190px;position:relative">
          <canvas id="driverProgressionChart"></canvas>
        </div>
      </div>
      </section>
      <section class="modal-pane" data-pane="log">${seasonLogHtml(raceResults.map(x => ({ ...x, season: targetSeason })), qualResults)}</section>
      <section class="modal-pane" data-pane="career"><div id="dpCareer"><div class="loading">Собираем карьеру с дебюта…</div></div></section>
      </div>`
    );
    $('#modal')?.classList.add('dossier');
    ChampionHall.decorateDossier();
    $('#modalBody .dp-compare')?.addEventListener('click', e => compareWith(driverObj.driverId, targetSeason, e.currentTarget.dataset.compareMate || null));
    if (!silent) PhotoFlight.land($('#modalBody .dp-hero .dp-photo'), 'driver');
    if (!photo) upgradeHeroPhoto(driverObj);
    const dossierBox = $('#modalBox');
    if (dossierBox) dossierBox.scrollTop = 0;
    const openTab = initModalTabs($('#modalBody'), {
      career: () => loadDriverCareer(driverKey).then(c => {
        renderCareerPane($('#dpCareer'), c, pal);
      }).catch(() => {
        const box = $('#dpCareer');
        if (box?.isConnected) box.innerHTML = '<div class="empty">Карьера этого пилота недоступна: Jolpica не вернула данные.</div>';
      })
    });
    if (keep) {
      if (keep.pane && keep.pane !== 'overview') openTab(keep.pane);
      if (dossierBox) dossierBox.scrollTop = keep.top;
    }

    if (window._driverModalTimer) clearTimeout(window._driverModalTimer);
    window._driverModalTimer = setTimeout(() => {
      const modalEl = document.getElementById('modal');
      const canvasEl = document.getElementById('driverProgressionChart');
      if (!modalEl || !modalEl.classList.contains('open') || !canvasEl || !canvasEl.isConnected) return;
      renderDriverProgressionChart(id, 'driverProgressionChart', 'points');
      computeTeammateBattle(targetSeason, current?.Driver?.driverId || canonId, bundle?.drivers, modalCtrl?.signal)
        .catch(() => null)
        .then(battle => {
          const box = document.getElementById('teammateBattleBox');
          if (box && box.isConnected) box.innerHTML = renderTeammateBattleHtml(battle, current, targetSeason);
        });
      $$('.prog-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          $$('.prog-tab-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          renderDriverProgressionChart(id, 'driverProgressionChart', btn.dataset.metric);
        });
      });
    }, 50);
  } catch (err) {
    console.error('[SHOWDRIVER_CATCH_ERROR]', err);
    openModal('<h2>Ошибка загрузки</h2>', '<div class="error-box">Не удалось загрузить профиль пилота. Проверьте соединение.</div>');
  }
}

async function showTeam(id, season = state.season) {
  WinSeq.next();
  if (!SnapshotStore.allDone) await SnapshotStore.whenAll();
  const targetSeason = Number(season);
  Deep.next = { path: `team/${encodeURIComponent(id)}/${targetSeason}`, t: Date.now() };
  openModal('<h2>Загрузка команды…</h2>', '<div class="loading">Получение показателей команды…</div>');

  try {
    let bundle = Object.values(state.pageData).find(x => x?.season === targetSeason && x.b?.teams?.some(t => t.Constructor?.constructorId === id))?.b;
    if (!bundle) {
      try { bundle = await loadSeasonBundle(targetSeason); } catch {}
    }
    const t = bundle?.teams?.find(x => x.Constructor?.constructorId === id);
    if (!t) {
      openModal('<h2>Команда</h2>', '<div class="empty">Команда не найдена в выбранном сезоне.</div>');
      return;
    }
    const c = t.Constructor;
    const pal = teamPalette(c.name);
    const members = (bundle.drivers || []).filter(d => d.Constructors?.some(x => x.constructorId === id));
    const races = bundle.races || [];

    openModal(
      `<h2>${esc(c.name)}</h2><p class="subtle">${esc(ruNat(c.nationality) || 'F1')} · Сезон ${targetSeason}</p>`,
      `<div class="dp dp-team-page" style="--tp:${pal.p};--ts:${pal.s};--ta:${pal.a};--tc:${pal.tc}">
        ${teamHeroHtml({ c, pal, season: targetSeason, t })}
        <div class="modal-tabs" role="tablist">
          <button class="modal-tab active" role="tab" data-pane="overview">Сезон ${targetSeason}</button>
          <button class="modal-tab" role="tab" data-pane="pit">Пит-стопы</button>
          <button class="modal-tab" role="tab" data-pane="history">История</button>
        </div>
        <section class="modal-pane" data-pane="overview">
          <div id="teamSeasonStats" class="stat-grid">
            <div class="stat"><b>P${esc(t.position)}</b><span>место в КК</span></div>
            <div class="stat"><b>${fmtNum(t.points)}</b><span>очки команды</span></div>
            <div class="stat"><b>${fmtNum(t.wins)}</b><span>победы</span></div>
          </div>
          <h3 class="dp-h">Пилоты в сезоне ${targetSeason}</h3>
          <div class="driver-grid" style="margin-top:10px">
            ${members.map(d => `
              <div class="card" data-driver="${esc(d.Driver.driverId)}" data-season="${targetSeason}" role="button" tabindex="0" style="padding:14px;cursor:pointer">
                <b>${esc(driverName(d.Driver))}</b>
                <div class="subtle" style="font-size:12px;margin-top:4px">P${esc(d.position)} · ${fmtNum(d.points)} ${ruPlural(d.points, ['очко', 'очка', 'очков'])} · ${fmtNum(d.wins)} ${ruPlural(d.wins, ['победа', 'победы', 'побед'])}</div>
              </div>`).join('') || '<div class="empty">Состав не возвращён API.</div>'}
          </div>
          <h3 class="dp-h">Гонка за гонкой</h3>
          <div id="teamRaceLog"><div class="loading">Собираем результаты этапов…</div></div>
        </section>
        <section class="modal-pane" data-pane="pit"><div id="teamPitPane"><div class="loading">Считаем пит-стопы сезона…</div></div></section>
        <section class="modal-pane" data-pane="history"><div id="teamHistoryPane"><div class="loading">Собираем историю команды…</div></div></section>
      </div>`
    );
    $('#modal')?.classList.add('dossier');
    const box = $('#modalBox');
    if (box) box.scrollTop = 0;
    PhotoFlight.land($('#modalBody .team-hero .team-logo img'), 'team');

    initModalTabs($('#modalBody'), {
      overview: () => { fillTeamSeasonPane(id, targetSeason, races, t); fillTeamLeadersPane(id, targetSeason); },
      pit: () => fillTeamPitPane(id, targetSeason, races),
      history: () => fillTeamHistoryPane(id, c, pal)
    });
  } catch (err) {
    console.error('SHOWTEAM_ERROR:', err);
    openModal('<h2>Ошибка</h2>', '<div class="error-box">' + esc(err?.message || String(err)) + '</div>');
  }
}

function generateRaceTimeline(results = [], pitStops = [], qualifying = [], race = {}, raceControl = []) {
  const events = [];

  events.push({
    lap: 1,
    type: 'START',
    badge: 't-badge-battle',
    title: 'Старт гонки',
    desc: 'Официальный старт заезда.',
    turn: null,
    progress: null,
    locationStatus: 'UNAVAILABLE'
  });

  (pitStops || []).forEach((ps, idx) => {
    const d = results.find(r => r.Driver?.driverId === ps.driverId);
    const dName = d ? driverName(d.Driver) : (ps.driverId || 'Пилот');
    const durStr = ps.duration ? `${ps.duration} с` : 'н/д';
    const pitLap = (ps.lap && !isNaN(Number(ps.lap))) ? Number(ps.lap) : null;
    events.push({
      lap: pitLap,
      type: 'PIT',
      badge: 't-badge-pit',
      title: `Пит-стоп: ${dName}`,
      desc: `Остановка #${ps.stop || idx + 1} на пит-лейн: ${durStr}`,
      turn: null,
      progress: null,
      locationStatus: 'UNAVAILABLE'
    });
  });

  (results || []).forEach(r => {
    if (isActualDnf(r.status)) {
      const parsedLaps = parseInt(r.laps, 10);
      const laps = (!isNaN(parsedLaps) && parsedLaps > 0) ? parsedLaps : null;
      events.push({
        lap: laps,
        type: 'DNF',
        badge: 't-badge-dnf',
        title: `Сход (${classifyResultStatus(r.status)}): ${driverName(r.Driver)}`,
        desc: `Причина: ${r.status || 'Сход'}${laps !== null ? ` на круге: ${laps}` : ''}`,
        turn: null,
        progress: null,
        locationStatus: 'UNAVAILABLE'
      });
    }
  });

  const fl = findOfficialFastestLap(results);
  if (fl && fl.FastestLap) {
    const fLap = (fl.FastestLap.lap && !isNaN(Number(fl.FastestLap.lap))) ? Number(fl.FastestLap.lap) : null;
    events.push({
      lap: fLap,
      type: 'FASTEST',
      badge: 't-badge-fastest',
      title: `Быстрый круг: ${driverName(fl.Driver)}`,
      desc: `Время: ${fl.FastestLap.Time?.time || '—'} на ср. скорости: ${fl.FastestLap.AverageSpeed?.speed || '—'} км/ч`,
      turn: null,
      progress: null,
      locationStatus: 'UNAVAILABLE'
    });
  }

  results.slice(0, 3).forEach(r => {
    if (Number(r.grid) > Number(r.position)) {
      events.push({
        lap: null,
        type: 'POSITION_GAIN',
        badge: 't-badge-battle',
        title: `Выигрыш позиций (Race-wide): ${driverName(r.Driver)}`,
        desc: `Прорыв за гонку: с P${r.grid} до P${r.position} (+${Number(r.grid) - Number(r.position)})`,
        turn: null,
        progress: null,
        locationStatus: 'UNAVAILABLE'
      });
    }
  });

  (raceControl || []).forEach(ev => events.push(ev));

  events.sort((a, b) => {
    const la = a.lap !== null ? a.lap : 9999;
    const lb = b.lap !== null ? b.lap : 9999;
    return la - lb;
  });
  return events;
}

function renderRaceTimelineHtml(events = [], circuitId = '') {
  if (!events.length) return '';

  const rcEvents = events.filter(e => e.type === 'SAFETY_CAR' || e.type === 'VSC' || e.type === 'RED_FLAG' || !!e.rcCategory);
  const scEvents = events.filter(e => e.type === 'SAFETY_CAR' || e.rcCategory === 'SC');
  const vscEvents = events.filter(e => e.type === 'VSC' || e.rcCategory === 'VSC');
  const redEvents = events.filter(e => e.type === 'RED_FLAG' || e.rcCategory === 'RED');

  return `
    <div class="race-timeline-wrap" style="margin:20px 0;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:12px">
        <h3 style="margin:0;font-size:1.1rem">Хронология гонки</h3>
      </div>
      <div class="timeline-filter-bar" id="timelineFilters" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">
        <button class="timeline-filter-btn active btn secondary sm" data-filter="ALL">Все (${events.length})</button>
        ${rcEvents.length ? `<button class="timeline-filter-btn btn secondary sm" data-filter="RC">${uiIcon('flag')} Дирекция / Флаги (${rcEvents.length})</button>` : ''}
        ${scEvents.length ? `<button class="timeline-filter-btn btn secondary sm" data-filter="SC"><span class="pill t-badge-sc" style="font-size:12px;padding:1px 5px">SC</span> (${scEvents.length})</button>` : ''}
        ${vscEvents.length ? `<button class="timeline-filter-btn btn secondary sm" data-filter="VSC"><span class="pill t-badge-vsc" style="font-size:12px;padding:1px 5px">VSC</span> (${vscEvents.length})</button>` : ''}
        ${redEvents.length ? `<button class="timeline-filter-btn btn secondary sm" data-filter="RED"><span class="pill t-badge-red" style="font-size:12px;padding:1px 5px">RED</span> (${redEvents.length})</button>` : ''}
        <button class="timeline-filter-btn btn secondary sm" data-filter="PIT">Пит-стопы</button>
        <button class="timeline-filter-btn btn secondary sm" data-filter="DNF">Сходы (DNF)</button>
        <button class="timeline-filter-btn btn secondary sm" data-filter="FASTEST">Быстрый круг</button>
        <button class="timeline-filter-btn btn secondary sm" data-filter="BATTLE">Борьба</button>
        ${events.some(e => e.type === 'OVERTAKE') ? `<button class="timeline-filter-btn btn secondary sm" data-filter="OVERTAKE">Обгоны (${events.filter(e => e.type === 'OVERTAKE').length})</button>` : ''}
        ${events.some(e => ['PENALTY', 'INVESTIGATION', 'STEWARD', 'DELETED'].includes(e.type)) ? `<button class="timeline-filter-btn btn secondary sm" data-filter="STEWARDS">Стюарды (${events.filter(e => ['PENALTY', 'INVESTIGATION', 'STEWARD', 'DELETED'].includes(e.type)).length})</button>` : ''}
      </div>
      <div class="tl-replay" id="tlReplay">
        <button type="button" class="btn secondary sm" id="tlPlay" aria-pressed="false">▶ Воспроизвести гонку</button>
        <div class="tl-progress" aria-hidden="true"><i id="tlBar"></i></div>
        <span class="tl-lap" id="tlLap" aria-live="polite"></span>
      </div>
      <div class="timeline-list" id="timelineList" style="display:flex;flex-direction:column;gap:8px;">
        ${events.map((ev, i) => `
          <div class="timeline-node" data-type="${ev.type}" data-rc="${ev.rcCategory || ''}" style="display:grid;grid-template-columns:auto auto 1fr auto;align-items:center;gap:12px;padding:10px 14px;background:var(--panel2);border:1px solid var(--line);border-radius:8px;">
            <span style="font-weight:800;font-size:12px;color:var(--text-bright);min-width:55px;">${ev.lap !== null && ev.lap !== undefined ? `Круг ${ev.lap}` : 'Гонка'}</span>
            <span class="t-badge ${ev.badge} ${ev.rcCategory ? 'rc-trigger-inline' : ''}" data-rc="${ev.rcCategory || ''}" style="font-weight:700;font-size:12px;padding:3px 8px;border-radius:6px;${ev.rcCategory ? 'cursor:pointer' : ''}">${tlLabel(ev.type)}</span>
            <div>
              <div style="font-weight:700;font-size:13px">${esc(ev.title)}</div>
              <div class="subtle" style="font-size:12px">${esc(ev.desc)}</div>
            </div>
            <span class="subtle" style="font-size:12px">${ev.locationStatus === 'DERIVED REPLAY POSITION' ? `${uiIcon('pin')} Пит-лейн` : `${uiIcon('pin')} N/A`}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

async function showRace(round, season = state.season) {
  const winSeq = WinSeq.next();
  if (!SnapshotStore.allDone) await SnapshotStore.whenAll();
  const targetSeason = Number(season) || state.season;
  Deep.next = { path: `race/${targetSeason}/${round}`, t: Date.now() };
  const memKey = `${targetSeason}::${round}`;
  // сохранённые ответы из IndexedDB читаем все сразу, а не по очереди (на слабом телефоне каждое чтение заметно)
  const idbCache = {};
  const idbGet = p => (idbCache[p] = idbCache[p] || ((typeof f1IdbStore !== 'undefined' && f1IdbStore.get) ? Promise.resolve(f1IdbStore.get(p)).catch(() => null) : Promise.resolve(null)));
  [`${targetSeason}.json`, `${targetSeason}/${round}/results.json`, `${targetSeason}/${round}/qualifying.json?limit=100`, `${targetSeason}/${round}/qualifying.json`,
   `${targetSeason}/${round}/pitstops.json?limit=100`, `${targetSeason}/${round}/pitstops.json`].forEach(idbGet);

  try {
    let race = null;
    let rRes = null;
    let qRes = null;
    let pRes = null;

    if (_raceDetailsMemCache.has(memKey)) {
      const mem = _raceDetailsMemCache.get(memKey);
      race = mem.race;
      rRes = mem.rRes;
      qRes = mem.qRes;
      pRes = mem.pRes;
    }

    if (!race && state.calendar && (Number(state.season) === targetSeason || Number(state.seasons?.calendar) === targetSeason)) {
      race = state.calendar.find(x => String(x.round) === String(round));
    }
    if (!race) {
      const cachedSeason = readCache(`${targetSeason}.json`, { allowStale: true });
      if (cachedSeason?.data) {
        const races = readRaces(cachedSeason.data);
        race = races.find(x => String(x.round) === String(round));
      }
    }
    if (!race) {
      const snapSeason = readSnapshot(`${targetSeason}.json`);
      if (snapSeason?.data) {
        const races = readRaces(snapSeason.data);
        race = races.find(x => String(x.round) === String(round));
      }
    }
    if (!race && typeof f1IdbStore !== 'undefined' && f1IdbStore.get) {
      try {
        const idbSeason = await idbGet(`${targetSeason}.json`);
        if (idbSeason?.data) {
          const races = readRaces(idbSeason.data);
          race = races.find(x => String(x.round) === String(round));
        }
      } catch {}
    }

    if (!rRes) {
      rRes = readCache(`${targetSeason}/${round}/results.json`, { allowStale: true });
      if (!rRes && typeof f1IdbStore !== 'undefined' && f1IdbStore.get) {
        try {
          rRes = await idbGet(`${targetSeason}/${round}/results.json`);
        } catch {}
      }
      if (!rRes) {
        rRes = readSnapshot(`${targetSeason}/${round}/results.json`);
      }
    }
    if (!qRes) {
      qRes = readCache(`${targetSeason}/${round}/qualifying.json?limit=100`, { allowStale: true }) ||
             readCache(`${targetSeason}/${round}/qualifying.json`, { allowStale: true });
      if (!qRes && typeof f1IdbStore !== 'undefined' && f1IdbStore.get) {
        try {
          qRes = await idbGet(`${targetSeason}/${round}/qualifying.json?limit=100`) ||
                 await idbGet(`${targetSeason}/${round}/qualifying.json`);
        } catch {}
      }
      if (!qRes) {
        qRes = readSnapshot(`${targetSeason}/${round}/qualifying.json?limit=100`) ||
               readSnapshot(`${targetSeason}/${round}/qualifying.json`);
      }
    }
    if (!pRes) {
      pRes = readCache(`${targetSeason}/${round}/pitstops.json?limit=100`, { allowStale: true }) ||
             readCache(`${targetSeason}/${round}/pitstops.json`, { allowStale: true });
      if (!pRes && typeof f1IdbStore !== 'undefined' && f1IdbStore.get) {
        try {
          pRes = await idbGet(`${targetSeason}/${round}/pitstops.json?limit=100`) ||
                 await idbGet(`${targetSeason}/${round}/pitstops.json`);
        } catch {}
      }
      if (!pRes) {
        pRes = readSnapshot(`${targetSeason}/${round}/pitstops.json?limit=100`) ||
               readSnapshot(`${targetSeason}/${round}/pitstops.json`);
      }
    }

    let hasKnownResults = Boolean(rRes?.data && readRaces(rRes.data)[0]?.Results?.length);
    const isPastSeason = targetSeason < 2025;
    const isFutureSeason = !hasKnownResults && Boolean(race) && !isRaceCompleted({ ...race, season: targetSeason });

    const fetchJobs = [];
    if (!hasKnownResults && !isFutureSeason) {
      if (!rRes) {
        fetchJobs.push(request(`${targetSeason}/${round}/results.json`, { priority: true }).then(v => { rRes = v; }).catch(() => {}));
      }
      if (!qRes) {
        fetchJobs.push(request(`${targetSeason}/${round}/qualifying.json?limit=100`, { priority: true }).then(v => { qRes = v; }).catch(() => {}));
      }
      if (!pRes && targetSeason >= 2011) {
        fetchJobs.push(request(`${targetSeason}/${round}/pitstops.json?limit=100`, { priority: false }).then(v => { pRes = v; }).catch(() => {}));
      }
      if (!race) {
        fetchJobs.push(request(`${targetSeason}/${round}.json`, { priority: true }).then(v => {
          if (v?.data) {
            const races = readRaces(v.data);
            race = races.find(x => String(x.round) === String(round)) || races[0];
          }
        }).catch(() => {}));
      }
    } else if (hasKnownResults) {
      if (!qRes) {
        fetchJobs.push(request(`${targetSeason}/${round}/qualifying.json?limit=100`, { priority: true }).then(v => { qRes = v; }).catch(() => {}));
      }
      if (!pRes && targetSeason >= 2011) {
        fetchJobs.push(request(`${targetSeason}/${round}/pitstops.json?limit=100`, { priority: false }).then(v => { pRes = v; }).catch(() => {}));
      }
    }

    if (fetchJobs.length > 0 && !isFutureSeason) {
      if (hasKnownResults) {
        // результаты гонки уже есть: квалификацию и пит-стопы ждём не дольше 600 мс, окно открывается с тем, что есть,
        // а опоздавшие данные сети перерисуют его (если это окно ещё открыто)
        const all = Promise.allSettled(fetchJobs);
        const inTime = await Promise.race([all.then(() => true), new Promise(r => setTimeout(() => r(false), 600))]);
        if (!inTime) all.then(() => { if (WinSeq.n === winSeq && $('#modal')?.classList.contains('open')) showRace(round, season); });
      } else {
        // данных этапа нет ни в снимке, ни в кэше: окно открывается сразу с загрузкой, чтобы нажатие не казалось потерянным
        openModal(`<h2>${esc(race ? ruGP(race.raceName) : `Этап ${round}`)}</h2><p class="subtle">Сезон ${targetSeason}</p>`, '<div class="loading">Загрузка результатов этапа…</div>');
        await Promise.allSettled(fetchJobs);
        if (WinSeq.n !== winSeq) return;   // пока ждали сеть, окно закрыли или открыли другое
      }
    }

    hasKnownResults = Boolean(rRes?.data && readRaces(rRes.data)[0]?.Results?.length);

    if (!race && rRes?.data) {
      race = readRaces(rRes.data)[0];
    }
    if (!race && qRes?.data) {
      race = readRaces(qRes.data)[0];
    }
    if (!race && !isFutureSeason) {
      try {
        const schedRes = await request(`${targetSeason}/${round}.json`, { priority: true });
        if (schedRes?.data) {
          const races = readRaces(schedRes.data);
          race = races.find(x => String(x.round) === String(round)) || races[0];
        }
      } catch (e) {
        console.warn('Schedule fetch notice:', e);
      }
    }

    if (!race && typeof HISTORICAL_STAGES !== 'undefined' && HISTORICAL_STAGES[targetSeason]?.[round]) {
      const h = HISTORICAL_STAGES[targetSeason][round];
      race = {
        season: targetSeason,
        round: round,
        raceName: h.raceName,
        date: h.date || `${targetSeason}-01-01`,
        Circuit: h.Circuit || { circuitName: 'Историческая трасса', Location: { locality: '', country: '' } }
      };
    }
    if (!race) {
      race = {
        season: targetSeason,
        round: round,
        raceName: `Гран-при ${targetSeason} (Раунд ${round})`,
        Circuit: { circuitName: 'Трасса уточняется', Location: { locality: '', country: '' } }
      };
    }

    const rMoment = scheduleMoment(race);
    const future = !hasKnownResults && Boolean(
      (Number.isFinite(rMoment) && rMoment > Date.now()) ||
      (race.date ? new Date(race.date) > new Date() : false) ||
      (targetSeason > new Date().getFullYear())
    );

    _raceDetailsMemCache.set(memKey, { rRes, qRes, pRes, race });

    let results = (rRes?.data ? readRaces(rRes.data)[0]?.Results : null) || [];
    const pitStops = (pRes?.data ? readRaces(pRes.data)[0]?.PitStops : null) || [];
    const qualifying = (qRes?.data ? readRaces(qRes.data)[0]?.QualifyingResults : null) || [];

    const histFallback = (!results.length && typeof HISTORICAL_STAGES !== 'undefined') ? (HISTORICAL_STAGES[targetSeason]?.[round] || null) : null;
    if (histFallback) {
      if (!race || race.raceName.includes('Раунд')) {
        race = {
          season: targetSeason,
          round: round,
          raceName: histFallback.raceName,
          date: histFallback.date || `${targetSeason}-01-01`,
          Circuit: histFallback.Circuit || { circuitName: 'Историческая трасса', Location: { locality: '', country: '' } }
        };
      }
      if (!results.length && histFallback.winner) {
        results = [histFallback.winner];
      }
    }

    const winner = results[0];
    const fastest = (histFallback && histFallback.fastest) ? histFallback.fastest : findOfficialFastestLap(results);

    const movers = results.map(x => ({
      driver: x.Driver,
      grid: Number(x.grid) || 0,
      pos: Number(x.position) || 0,
      delta: (Number(x.grid) || 0) - (Number(x.position) || 0)
    })).filter(x => x.grid > 0 && x.pos > 0);
    const biggestGain = movers.filter(x => x.delta > 0).sort((a, b) => b.delta - a.delta)[0];
    const biggestDrop = movers.filter(x => x.delta < 0).sort((a, b) => a.delta - b.delta)[0];

    const resultsTableHtml = results.length ? `
      <h3>Результаты гонки</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Пилот</th>
              <th>Конструктор</th>
              <th class="num">Старт</th>
              <th class="num">Очки</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            ${results.map(x => `
              <tr data-driver="${esc(x.Driver?.driverId)}" data-season="${targetSeason}" tabindex="0">
                <td style="width:40px"><span class="pos-badge ${x.position === '1' ? 'p1' : x.position === '2' ? 'p2' : x.position === '3' ? 'p3' : ''}">${esc(x.position)}</span></td>
                <td><b>${esc(driverName(x.Driver))}</b></td>
                <td><span class="team-livery-bar" style="background:${teamColor(x.Constructor?.name)};display:inline-block;vertical-align:middle;margin-right:6px"></span>${esc(x.Constructor?.name || '—')}</td>
                <td class="num">${esc(x.grid || '—')}</td>
                <td class="num"><b>${fmtNum(x.points)}</b></td>
                <td class="subtle">${esc(x.status || 'Finished')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    ` : future ? '<div class="empty">Гонка ещё не состоялась. Результаты появятся после финиша.</div>'
               : `<div class="error-box" style="margin-top:16px">
                    <span class="prov-badge prov-unavail">ДАННЫЕ НЕ ЗАГРУЖЕНЫ</span>
                    <p style="margin:8px 0 0">Не удалось загрузить результаты и телеметрию гонки (автономный режим или сбой сети).</p>
                    <button class="btn secondary" id="btnRetryRaceModal" style="margin-top:10px;font-size:12px;padding:6px 14px">${uiIcon('refresh')} Повторить загрузку</button>
                  </div>`;

    const qualTableHtml = qualifying.length ? `
      <h3 style="margin-top:22px">Результаты квалификации</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>#</th><th>Пилот</th><th>Конструктор</th><th class="num">Q1</th><th class="num">Q2</th><th class="num">Q3</th></tr>
          </thead>
          <tbody>
            ${qualifying.map(x => `
              <tr data-driver="${esc(x.Driver?.driverId)}" data-season="${targetSeason}" tabindex="0">
                <td style="width:40px"><span class="pos-badge ${x.position === '1' ? 'p1' : ''}">${esc(x.position)}</span></td>
                <td><b>${esc(driverName(x.Driver))}</b></td>
                <td>${esc(x.Constructor?.name || '—')}</td>
                <td class="num">${esc(x.Q1 || '—')}</td>
                <td class="num">${esc(x.Q2 || '—')}</td>
                <td class="num"><b>${esc(x.Q3 || '—')}</b></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    ` : '';

    const weatherLoc = race.Circuit?.Location || {};
    const weatherHtml = `
      <div id="raceWeatherBox" style="margin-bottom:18px">
        <div class="weather-card">
          <div class="weather-item">
            <span class="weather-label">Локация</span>
            <span class="weather-value">${esc(weatherLoc.locality || '')}, ${esc(weatherLoc.country || '')}</span>
          </div>
          <div class="weather-item">
            <span class="weather-label">Координаты</span>
            <span class="weather-value">${formatCoordinates(weatherLoc.lat, weatherLoc.long)}</span>
          </div>
          <div class="weather-item">
            <span class="weather-label">Погода сессии</span>
            <span class="weather-value">Загрузка метеоданных…</span>
          </div>
        </div>
      </div>
    `;

    const storyHtml = generateRaceStory(results, qualifying);
    const strategyHtml = generateRaceStrategy(pitStops, results, targetSeason);

    const raceCanonId = (typeof TRACK_ALIASES !== 'undefined' && TRACK_ALIASES[race.Circuit?.circuitId]) || race.Circuit?.circuitId;
    const raceSvgPath = (typeof CIRCUIT_PATHS !== 'undefined' && CIRCUIT_PATHS[raceCanonId]) || null;

    let raceViewerHtml = '';
    if (raceSvgPath) {
      raceViewerHtml = `
        <div class="circuit-viewport" id="raceCircuitViewport" style="margin-bottom:16px">
          <svg viewBox="0 0 500 500" class="circuit-svg-layer" id="raceCircuitSvg" role="img" aria-label="Схема трассы ${esc(race.Circuit?.circuitName || '')}">
            <path d="${raceSvgPath}" class="track-base-path"/>
          </svg>
        </div>
      `;
    } else {
      raceViewerHtml = trackImg(race.Circuit, 'track-hero');
    }

    openModal(
      `<h2>${esc(ruGP(race.raceName))}</h2><p class="subtle">${esc(race.Circuit?.circuitName)} · Раунд ${esc(race.round)} · Сезон ${targetSeason}</p>`,
      `
      <div class="modal-tabs" role="tablist" id="raceTabs">
        <button class="modal-tab ${!future && !results.length ? '' : 'active'}" role="tab" data-pane="overview">Обзор</button>
        <button class="modal-tab ${!future && !results.length ? 'active' : ''}" role="tab" data-pane="results">Результаты</button>
        ${race.Sprint ? '<button class="modal-tab" role="tab" data-pane="sprint">Спринт</button>' : ''}
        ${!future && results.length ? `
        <button class="modal-tab" role="tab" data-pane="strategy">Стратегия</button>
        <button class="modal-tab" role="tab" data-pane="positions">Позиции</button>
        <button class="modal-tab" role="tab" data-pane="telemetry">Телеметрия</button>
        <button class="modal-tab" role="tab" data-pane="timeline">Хронология / Круги</button>` : ''}
      </div>
      <section class="modal-pane" data-pane="overview">
      ${future ? '<div class="empty" style="margin-bottom:16px">Гонка ещё не состоялась. Результаты появятся после финиша.</div>' : ''}
      ${future ? '' : racePodiumHtml(results)}
      <div class="stat-grid" style="margin-bottom:18px">
        <div class="stat" id="raceDateStat"><b>${esc(fmtSchedule(race))}</b><span>Дата старта</span></div>
        <div class="stat" id="raceWinnerStat"><b>${winner ? esc(driverName(winner.Driver)) : (future ? 'Ожидается' : (results.length ? '—' : 'Не загружено'))}</b><span>Победитель</span></div>
        <div class="stat" id="raceFastestStat"><b>${fastest ? esc(driverName(fastest.Driver)) : (future ? 'Ожидается' : (targetSeason < 2004 ? 'Не регистрировался' : (results.length ? '—' : 'Не загружено')))}</b><span>Быстрый круг (${fastest?.FastestLap?.Time?.time || (future ? 'Ожидается' : (targetSeason < 2004 ? 'до 2004 г.' : (results.length ? '—' : 'Не загружено')))})</span></div>
        <div class="stat" id="racePitStopsStat"><b>${pitStops.length ? `${pitStops.length}` : (future ? 'Ожидается' : (targetSeason < 2011 ? 'Нет данных (до 2011)' : (results.length ? '0' : 'Не загружено')))}</b><span>Пит-стопов</span></div>
      </div>
      ${biggestGain || biggestDrop ? `
        <div class="stat-grid" style="margin-bottom:18px">
          ${biggestGain ? `<div class="stat"><b style="color:var(--green)">+${biggestGain.delta}</b><span>Прорыв: ${esc(driverName(biggestGain.driver))} (P${biggestGain.grid} → P${biggestGain.pos})</span></div>` : ''}
          ${biggestDrop ? `<div class="stat"><b style="color:var(--red2)">${biggestDrop.delta}</b><span>Потеря: ${esc(driverName(biggestDrop.driver))} (P${biggestDrop.grid} → P${biggestDrop.pos})</span></div>` : ''}
        </div>
      ` : ''}
      <div style="display:flex;justify-content:flex-end;gap:8px;flex-wrap:wrap;margin-bottom:12px">
        ${future ? '' : Watch.button(targetSeason, race.round)}
        <button class="btn secondary share-race-btn" id="btnShareRaceReport" data-action="share-race-results" style="padding:8px 14px;font-size:12px;min-height:44px">Поделиться результатами · Экспорт в текстовый отчёт о гонке</button>
      </div>
      <div id="raceStoryBox">${storyHtml}</div>
      ${weatherHtml}
      ${raceViewerHtml}
      <div id="overviewStrategyHost" style="margin-top:18px"><div id="raceStrategyBox">${strategyHtml}</div></div>
      </section>
      <section class="modal-pane" data-pane="results">
${resultsTableHtml}
      ${qualTableHtml}
      </section>
      <section class="modal-pane" data-pane="sprint"><div id="raceSprintBox"><div class="loading">Загрузка результатов спринта…</div></div></section>
      <section class="modal-pane" data-pane="strategy">
      <div id="strategyPaneHost"></div>
      </section>
      <section class="modal-pane" data-pane="positions"><div id="positionsPaneHost"><div id="racePositionsBox"><div class="loading">Загрузка покруговых позиций (OpenF1 / Jolpica)…</div></div></div></section>
      <section class="modal-pane" data-pane="telemetry"><div id="raceTelemetryBox"><div class="loading">Загрузка телеметрии лучшего круга (OpenF1)…</div></div></section>
      <section class="modal-pane" data-pane="timeline">
      <div id="timelinePositionsHost" style="margin-bottom:18px"></div>
      <div id="raceTimelineBox">${renderRaceTimelineHtml(generateRaceTimeline(results, pitStops, qualifying, race), race.Circuit?.circuitId)}</div>
      <p class="subtle" id="raceControlSource" style="font-size:12px;margin:-8px 0 16px"></p>
      </section>
      `
    );

    const timelineInput = { results, pitStops, qualifying, raceControl: [] };
    window._lastRaceLapsModel = null;
    const raceInsights = { stints: null };
    const myStrategyBox = $('#raceStrategyBox');
    const moveStrategyBox = (hostId) => {
      const box = document.getElementById('raceStrategyBox') || myStrategyBox;
      const host = document.getElementById(hostId);
      if (box && host && box.parentElement !== host) host.appendChild(box);
    };
    const renderStrategyBox = () => {
      if (myStrategyBox && myStrategyBox.isConnected) {
        myStrategyBox.innerHTML = generateRaceStrategy(timelineInput.pitStops, timelineInput.results, targetSeason, raceInsights.stints);
      }
    };
    const ensureStintsLoaded = () => {
      if (targetSeason < OPENF1_FIRST_SEASON) return Promise.resolve(null);
      if (raceInsights.stints && typeof raceInsights.stints === 'object') return Promise.resolve(raceInsights.stints);
      if (raceInsights.stintsPromise) return raceInsights.stintsPromise;
      raceInsights.stintsLoading = true;
      raceInsights.stintsPromise = loadOpenF1Stints(targetSeason, race).then(st => {
        raceInsights.stintsLoading = false;
        raceInsights.stints = st || 'UNAVAILABLE';
        renderStrategyBox();
        return st;
      }).catch(() => {
        raceInsights.stintsLoading = false;
        raceInsights.stints = 'ERROR';
        renderStrategyBox();
        return null;
      });
      return raceInsights.stintsPromise;
    };
    if (!future && results.length) {
      ensureStintsLoaded();
    }
    if (future) {
      if (weatherLoc.lat && weatherLoc.long) {
        loadCircuitWeatherUI(Number(weatherLoc.lat), Number(weatherLoc.long), 'raceWeatherBox', race.date, 'Race', race.Circuit?.circuitId, race.time);
      }
    } else {
      renderRaceWeather(targetSeason, race, 'raceWeatherBox');
    }
    let _positionsLoaded = false;
    const ensurePositionsLoaded = (targetHostId) => {
      const posBox = document.getElementById('racePositionsBox');
      const host = document.getElementById(targetHostId);
      if (posBox && host && posBox.parentElement !== host) {
        host.appendChild(posBox);
      }
      if (_positionsLoaded) return;
      _positionsLoaded = true;
      loadLapPositions(targetSeason, race, timelineInput.results, timelineInput.pitStops, timelineInput.raceControl, raceInsights.stints || raceInsights.stintsPromise)
        .then(model => {
          window._lastRaceLapsModel = model;
          if (model?.stintsMap && Object.keys(model.stintsMap).length > 0 && (!raceInsights.stints || raceInsights.stints === 'UNAVAILABLE' || raceInsights.stints === 'ERROR')) {
            raceInsights.stints = model.stintsMap;
          }
          renderPositionsChart('racePositionsBox', model);
          renderStrategyBox();
        })
        .catch(() => renderPositionsChart('racePositionsBox', null));
    };

    initModalTabs($('#modalBody'), {
      overview: () => moveStrategyBox('overviewStrategyHost'),
      sprint: () => renderSprintResults(targetSeason, race.round, 'raceSprintBox'),
      timeline: () => {
        ensurePositionsLoaded('timelinePositionsHost');
        if (targetSeason < OPENF1_FIRST_SEASON) return;
        loadOvertakeEvents(targetSeason, race, timelineInput.results, timelineInput.pitStops).then(ev => {
          if (!ev.length) return;
          timelineInput.raceControl = [...timelineInput.raceControl.filter(e => e.type !== 'OVERTAKE'), ...ev];
          rerenderTimeline();
        }).catch(() => {});
      },
      strategy: () => { moveStrategyBox('strategyPaneHost'); return ensureStintsLoaded(); },
      positions: () => ensurePositionsLoaded('positionsPaneHost'),
      telemetry: () => loadFastestLapTelemetry(targetSeason, race, timelineInput.results)
        .then(tel => renderTelemetry('raceTelemetryBox', tel))
        .catch(() => renderTelemetry('raceTelemetryBox', null))
    });
    $('#raceTabs')?.addEventListener('click', e => {
      const btn = e.target.closest('.modal-tab');
      if (!btn) return;
      if (btn.dataset.pane === 'overview') moveStrategyBox('overviewStrategyHost');
      else if (btn.dataset.pane === 'strategy') moveStrategyBox('strategyPaneHost');
      else if (btn.dataset.pane === 'positions') ensurePositionsLoaded('positionsPaneHost');
      else if (btn.dataset.pane === 'timeline') ensurePositionsLoaded('timelinePositionsHost');
    });

    $('#btnRetryRaceModal')?.addEventListener('click', () => {
      _raceDetailsMemCache.delete(memKey);
      showRace(round, targetSeason);
    });

    $('#btnShareRaceReport')?.addEventListener('click', () => {
      showShareableRaceReport(race, winner, results, pitStops);
    });

    let currentTimelineFilter = 'ALL';
    const applyTimelineFilter = (filter) => {
      currentTimelineFilter = filter;
      $$('#timelineFilters .timeline-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === filter));
      $$('#timelineList .timeline-node').forEach(node => {
        const nType = node.dataset.type;
        const nRc = node.dataset.rc;
        let show = false;
        if (filter === 'ALL') show = true;
        else if (filter === 'RC') show = (nType === 'SAFETY_CAR' || nType === 'VSC' || nType === 'RED_FLAG' || !!nRc);
        else if (filter === 'SC') show = (nType === 'SAFETY_CAR' || nRc === 'SC');
        else if (filter === 'VSC') show = (nType === 'VSC' || nRc === 'VSC');
        else if (filter === 'RED') show = (nType === 'RED_FLAG' || nRc === 'RED');
        else if (filter === 'BATTLE') show = (nType === 'BATTLE' || nType === 'POSITION_GAIN');
        else if (filter === 'OVERTAKE') show = nType === 'OVERTAKE';
        else if (filter === 'STEWARDS') show = ['PENALTY', 'INVESTIGATION', 'STEWARD', 'DELETED'].includes(nType);
        else show = (nType === filter);
        node.style.display = show ? 'grid' : 'none';
      });
    };

    const bindTimelineFilters = () => {
      $$('#timelineFilters .timeline-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.filter;
          const next = (currentTimelineFilter === target && target !== 'ALL') ? 'ALL' : target;
          applyTimelineFilter(next);
        });
      });

      $$('.race-control-summary .rc-filter-trigger, #timelineList .rc-trigger-inline').forEach(trigger => {
        trigger.addEventListener('click', () => {
          const rc = trigger.dataset.rc;
          const next = (currentTimelineFilter === rc) ? 'ALL' : rc;
          applyTimelineFilter(next);
          toast(`Дирекция гонки: фильтр ${next === 'ALL' ? 'все' : next}`);
        });
      });
    };
    bindTimelineFilters();

    const rerenderTimeline = () => {
      const timelineBox = $('#raceTimelineBox');
      if (!timelineBox || !timelineBox.isConnected) return;
      timelineBox.innerHTML = renderRaceTimelineHtml(
        generateRaceTimeline(timelineInput.results, timelineInput.pitStops, timelineInput.qualifying, race, timelineInput.raceControl),
        race.Circuit?.circuitId
      );
      bindTimelineFilters();
      applyTimelineFilter(currentTimelineFilter);
    };

    if (!future && results.length) {
      const rcNote = $('#raceControlSource');
      if (rcNote) rcNote.textContent = targetSeason < OPENF1_FIRST_SEASON
        ? 'Флаги дирекции гонки (SC / VSC / RED) публикуются OpenF1 начиная с сезона 2023.'
        : 'Загрузка сообщений дирекции гонки (OpenF1)…';
      loadRaceControlEvents(targetSeason, race).then(rc => {
        const note = $('#raceControlSource');
        if (!note || !note.isConnected) return;
        if (rc.status !== 'OK') {
          if (targetSeason >= OPENF1_FIRST_SEASON) note.textContent = 'Сообщения дирекции гонки для этого этапа не найдены в OpenF1.';
          return;
        }
        const flagCount = rc.events.filter(e => e.rcCategory).length;
        note.textContent = flagCount
          ? `Дирекция гонки: ${flagCount} событ. (SC / VSC / красный флаг), решения стюардов и аннулированные круги · источник OpenF1`
          : 'Дирекция гонки: Safety Car, VSC и красных флагов не было · источник OpenF1';
        timelineInput.raceControl = [...rc.events, ...timelineInput.raceControl.filter(e => e.type === 'OVERTAKE')];
        rerenderTimeline();
      }).catch(() => {
        const note = $('#raceControlSource');
        if (note && note.isConnected) note.textContent = 'OpenF1 недоступен: флаги дирекции гонки не загружены.';
      });
    }

    if (fetchJobs.length > 0 && rRes) {
      Promise.allSettled(fetchJobs).then(() => {
        const modalOpen = $('#modal')?.classList.contains('open');
        if (!modalOpen) return;
        const currentTitle = $('#modalTitle h2')?.textContent;
        const expectedRuTitle = ruGP(race?.raceName || '');
        if (!currentTitle || (!currentTitle.includes(expectedRuTitle) && !currentTitle.includes(race?.raceName || ''))) return;

        const freshResults = (rRes?.data ? readRaces(rRes.data)[0]?.Results : null) || results;
        const freshPitStops = (pRes?.data ? readRaces(pRes.data)[0]?.PitStops : null) || pitStops;
        const freshQualifying = (qRes?.data ? readRaces(qRes.data)[0]?.QualifyingResults : null) || qualifying;
        const freshWinner = freshResults[0];
        const freshFastest = findOfficialFastestLap(freshResults);

        _raceDetailsMemCache.set(memKey, { rRes, qRes, pRes, race });

        const pitEl = $('#racePitStopsStat b');
        if (pitEl) {
          pitEl.textContent = freshPitStops.length
            ? `${freshPitStops.length}`
            : (future ? 'Ожидается' : (targetSeason < 2011 ? 'Нет данных (до 2011)' : (freshResults.length ? '0' : 'Не загружено')));
        }
        const winnerEl = $('#raceWinnerStat b');
        if (winnerEl && freshWinner) {
          winnerEl.textContent = driverName(freshWinner.Driver);
        }
        const fastestEl = $('#raceFastestStat b');
        const fastestSpan = $('#raceFastestStat span');
        if (fastestEl && freshFastest) {
          fastestEl.textContent = driverName(freshFastest.Driver);
          if (fastestSpan) {
            fastestSpan.textContent = `Быстрый круг (${freshFastest?.FastestLap?.Time?.time || '—'})`;
          }
        }
        if (freshPitStops.length || freshResults.length) {
          Object.assign(timelineInput, { results: freshResults, pitStops: freshPitStops, qualifying: freshQualifying });
          if (!future) ensureStintsLoaded();
          renderStrategyBox();
        }
        if (freshPitStops.length) {
          Object.assign(timelineInput, { results: freshResults, pitStops: freshPitStops, qualifying: freshQualifying });
          rerenderTimeline();
        }
        const shareBtn = $('#btnShareRaceReport');
        if (shareBtn) {
          const freshBtn = shareBtn.cloneNode(true);
          shareBtn.parentNode?.replaceChild(freshBtn, shareBtn);
          freshBtn.addEventListener('click', () => {
            showShareableRaceReport(race, freshWinner, freshResults, freshPitStops);
          });
        }
      });
    }
    if (!future && results.length && targetSeason >= OPENF1_FIRST_SEASON) {
      await Promise.race([ensureStintsLoaded(), new Promise(r => setTimeout(r, 1800))]);
    }
  } catch (err) {
    console.error('SHOWRACE_ERROR:', err);
    openModal('<h2>Ошибка</h2>', '<div class="error-box">Не удалось загрузить данные этапа. ' + esc(err?.message || '') + '</div>');
  }
}

function driverRadarData(season, driverId) {
  computeDriverTraits(season);
  const st = _traitStats.get(Number(season));
  const mine = st?.per?.[driverId];
  if (!st || !mine || mine.starts < Math.max(3, st.rounds * 0.5)) return null;
  const field = Object.values(st.per).filter(x => x.starts >= Math.max(3, st.rounds * 0.5));
  const defs = [
    { label: 'Победы', v: x => x.wins / x.starts, fmt: x => `${x.wins} из ${x.starts}` },
    { label: 'Подиумы', v: x => x.podiums / x.starts, fmt: x => `${x.podiums} из ${x.starts}` },
    { label: 'Поулы', v: x => x.poles / x.starts, fmt: x => `${x.poles} из ${x.starts}`, needsQual: true },
    { label: 'Очки в гонках', v: x => x.pts / x.starts, fmt: x => `${x.pts} из ${x.starts}` },
    { label: 'Быстрые круги', v: x => x.fastest / x.starts, fmt: x => `${x.fastest}` },
    { label: 'Атака на старте', v: x => (x.gainN ? Math.max(0, x.gain / x.gainN) : 0), fmt: x => `${x.gainN ? (x.gain / x.gainN > 0 ? '+' : '') + (x.gain / x.gainN).toFixed(1) : '0'} поз.` },
    { label: 'Надёжность', v: x => 1 - x.dnf / x.starts, fmt: x => `${x.dnf} ${ruPlural(x.dnf, ['сход', 'схода', 'сходов'])}` }
  ].filter(d => !d.needsQual || st.qualRounds >= st.rounds);
  return defs.map(d => { const best = Math.max(...field.map(d.v)); const val = d.v(mine); return { label: d.label, share: best > 0 ? Math.min(1, Math.max(0, val / best)) : 0, text: d.fmt(mine) }; });
}

function driverRadarHtml(data, color) {
  if (!data?.length) return '';
  const n = data.length, cx = 150, cy = 150, R = 105;
  const pt = (i, r) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; };
  const rings = [0.25, 0.5, 0.75, 1].map(k => `<polygon points="${data.map((_, i) => pt(i, R * k).map(v => v.toFixed(1)).join(',')).join(' ')}"/>`).join('');
  const spokes = data.map((_, i) => { const [x, y] = pt(i, R); return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`; }).join('');
  const area = data.map((d, i) => pt(i, R * Math.max(d.share, 0.02)).map(v => v.toFixed(1)).join(',')).join(' ');
  const labels = data.map((d, i) => { const [x, y] = pt(i, R + 22); const anchor = Math.abs(x - cx) < 8 ? 'middle' : x > cx ? 'start' : 'end'; return `<text class="radar-label" x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="${anchor}">${esc(d.label)}</text>`; }).join('');
  const dots = data.map((d, i) => { const [x, y] = pt(i, R * Math.max(d.share, 0.02)); return `<circle class="radar-dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.2"/>`; }).join('');
  const reticle = `<g class="radar-reticle" aria-hidden="true"><line x1="${cx - 10}" y1="${cy}" x2="${cx + 10}" y2="${cy}" class="radar-reticle-cross"/><line x1="${cx}" y1="${cy - 10}" x2="${cx}" y2="${cy + 10}" class="radar-reticle-cross"/><circle cx="${cx}" cy="${cy}" r="2.2" class="radar-reticle-core"/></g>`;
  const azimuth = `<g class="radar-azimuth" aria-hidden="true"><text x="${cx}" y="${(cy - R - 6).toFixed(1)}" text-anchor="middle" class="radar-azimuth-mark">000°</text><text x="${(cx + R + 14).toFixed(1)}" y="${(cy + 3).toFixed(1)}" text-anchor="start" class="radar-azimuth-mark">090°</text><text x="${cx}" y="${(cy + R + 15).toFixed(1)}" text-anchor="middle" class="radar-azimuth-mark">180°</text><text x="${(cx - R - 14).toFixed(1)}" y="${(cy + 3).toFixed(1)}" text-anchor="end" class="radar-azimuth-mark">270°</text></g>`;
  const rangeMarks = `<g class="radar-ranges" aria-hidden="true"><text x="${cx + 3}" y="${(cy - R * 0.25 + 3).toFixed(1)}" class="radar-range-mark">25%</text><text x="${cx + 3}" y="${(cy - R * 0.50 + 3).toFixed(1)}" class="radar-range-mark">50%</text><text x="${cx + 3}" y="${(cy - R * 0.75 + 3).toFixed(1)}" class="radar-range-mark">75%</text><text x="${cx + 3}" y="${(cy - R * 1.00 + 3).toFixed(1)}" class="radar-range-mark">MAX</text></g>`;
  return `<div class="radar-card"${color ? ` style="--tp:${color}"` : ''}><span class="hud-corner tl" aria-hidden="true"></span><span class="hud-corner tr" aria-hidden="true"></span><span class="hud-corner bl" aria-hidden="true"></span><span class="hud-corner br" aria-hidden="true"></span><svg viewBox="-70 0 440 300" role="img" aria-label="Профиль пилота: ${data.map(d => `${d.label} ${Math.round(d.share * 100)}%`).join(', ')}"><g class="radar-grid">${rings}${spokes}</g>${rangeMarks}${azimuth}${reticle}<polygon class="radar-area" points="${area}"/>${dots}${labels}</svg>
    <div><div class="radar-list">${data.map((d, i) => {
      const pct = Math.round(d.share * 100);
      return `<div class="radar-ch"><span>${esc(d.label)} <small>${esc(d.text)}</small></span><span class="radar-ch-bar" aria-hidden="true"><i style="width:${pct}%"></i></span><b>${pct}%</b></div>`;
    }).join('')}</div>
    <p class="subtle chart-note">100% — лучший в сезоне <button type="button" class="info-tip" aria-label="Как считается профиль" aria-expanded="false"><span aria-hidden="true">i</span></button><span class="info-tip-body" hidden>100% — лучший показатель среди пилотов сезона. Считается по результатам этапов, которые есть во встроенных данных.</span></p></div></div>`;
}

async function loadCircuitsPage() {
  populateCircuitFilters();
  renderCircuitCatalog();
  PageMotif.circuits();
}

async function loadHistory({ signal = null } = {}) {
  const season = Number($('#historySeason').value);
  setPageSeason('history', season);
  try {
    const b = await loadSeasonBundle(season, { signal });
    if (signal?.aborted || Number($('#historySeason').value) !== season) return;
    $('#historyTable').innerHTML = renderDriverTable(b.drivers, 30, season);
    $('#historyCaption').textContent = `${season}`;
    $('#historyTeams').innerHTML = b.teams.length ? renderTeamTable(b.teams, season) : '<div class="empty">Кубок конструкторов разыгрывается с 1958 года.</div>';
    PosMoves.decorateAll(season);
    if (!$('#championsArchive .champ-grid')) renderChampionsArchive();
    const champ = b.drivers[0];
    PageMotif.history(season, champ);
    $('#historyChampion').innerHTML = champ ? `
      <div style="display:flex;align-items:center;gap:14px;padding:12px;border:1px solid var(--line);border-radius:12px;background:var(--panel2)">
        <div class="avatar" style="width:64px;height:64px;font-size:1.3rem" data-wiki="${esc(champ.Driver.url || '')}">${esc((champ.Driver.givenName || '?')[0])}${esc((champ.Driver.familyName || '?')[0])}</div>
        <div>
          <div class="eyebrow" style="color:var(--gold)">${season < CURRENT_SEASON ? `${uiIcon('trophy')} ЧЕМПИОН МИРА ${season}` : `ЛИДЕР СЕЗОНА ${season}`}</div>
          <h3 style="margin:2px 0">${esc(driverName(champ.Driver))}</h3>
          <p class="subtle" style="margin:0">${fmtNum(champ.points)} ${ruPlural(champ.points, ['очко', 'очка', 'очков'])} · ${esc(champ.Constructors?.[0]?.name || '—')}</p>
        </div>
      </div>
    ` : '<div class="empty">Нет данных о победителе сезона.</div>';

    drawChart('historyChart', 'bar', b.drivers.slice(0, 8).map(x => x.Driver.familyName), [{
      label: `${season} · очки пилотов`,
      data: b.drivers.slice(0, 8).map(x => Number(x.points) || 0),
      backgroundColor: '#e10600'
    }]);
    ImageObserver.observeAll();
  } catch {
    if (signal?.aborted) return;
    $('#historyTable').innerHTML = '<div class="error-box"><span class="prov-badge prov-unavail">НЕТ ДАННЫХ</span><p style="margin:8px 0 0">Не удалось загрузить историю сезона.</p></div>';
    if (state.charts['historyChart']) state.charts['historyChart'].destroy();
  }
}

function getOfflineSimulatedWeather() {
  return { current: {}, isUnavailable: true };
}

async function fetchCircuitWeather(lat, lon, date = null, session = 'Race', circuitId = null, sessionTime = null, signal = null) {
  if (signal?.aborted) return getOfflineSimulatedWeather(lat, lon, date);
  const sessionName = session || 'Race';
  const coordsStr = `${lat.toFixed(4)},${lon.toFixed(4)}`;
  const dateStr = date ? (typeof date === 'string' ? date.split('T')[0] : 'current') : 'current';
  const cId = circuitId || 'f1';
  const sTimeStr = sessionTime ? String(sessionTime).replace(/[^0-9:]/g, '') : 'none';
  const key = `weather:${cId}:${dateStr}:${sessionName}:${sTimeStr}:${coordsStr}`;
  const cached = readCache(key, { maxAgeMs: 20 * 60 * 1000, allowStale: false });
  if (cached) return cached.data;
  if (signal?.aborted) return getOfflineSimulatedWeather(lat, lon, date);

  const isHistorical = date && (new Date(date).getTime() < Date.now() - 24 * 3600 * 1000);

  if (isHistorical && /^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    let onAbort = null;
    try {
      const archUrl = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${dateStr}&end_date=${dateStr}&hourly=temperature_2m,soil_temperature_0_to_7cm,direct_normal_irradiance,precipitation,wind_speed_10m,wind_direction_10m,relative_humidity_2m,cloud_cover&timezone=auto`;
      const ctrl = new AbortController();
      const tId = setTimeout(() => ctrl.abort(), 2500);
      if (signal) {
        onAbort = () => ctrl.abort();
        signal.addEventListener('abort', onAbort, { once: true });
      }
      const res = await fetch(archUrl, { signal: ctrl.signal });
      clearTimeout(tId);
      if (signal && onAbort) signal.removeEventListener('abort', onAbort);
      if (signal?.aborted) return getOfflineSimulatedWeather(lat, lon, date);
      if (res.ok) {
        const data = await res.json();
        if (data.hourly) {
          const h = data.hourly;
          let idx = 14; // Default midday 14:00 local
          let isApprox = true;
          if (sessionTime && typeof sessionTime === 'string') {
            const parts = sessionTime.split(':');
            const hour = parseInt(parts[0], 10);
            const minute = parts.length > 1 ? parseInt(parts[1], 10) : 0;
            if (!isNaN(hour) && hour >= 0 && hour < 24) {
              const roundedHour = (!isNaN(minute) && minute >= 30) ? Math.min(23, hour + 1) : hour;
              idx = roundedHour;
              isApprox = false;
            }
          }
          idx = Math.min(idx, (h.time ? h.time.length - 1 : 14));
          data.current = {
            temperature_2m: h.temperature_2m ? h.temperature_2m[idx] : null,
            surface_proxy: h.soil_temperature_0_to_7cm ? h.soil_temperature_0_to_7cm[idx] : null,
            direct_normal_irradiance: h.direct_normal_irradiance ? h.direct_normal_irradiance[idx] : null,
            relative_humidity_2m: h.relative_humidity_2m ? h.relative_humidity_2m[idx] : null,
            precipitation_probability: null, // Historical ERA5 archive does not provide precipitation probability
            precipitation: h.precipitation ? h.precipitation[idx] : 0.0,
            cloud_cover: h.cloud_cover ? h.cloud_cover[idx] : null,
            wind_speed_10m: h.wind_speed_10m ? h.wind_speed_10m[idx] : null,
            wind_direction_10m: h.wind_direction_10m ? h.wind_direction_10m[idx] : null
          };
          data.isHistorical = true;
          data.isApproximate = isApprox;
          data.sessionHour = idx;
        }
        writeCache(key, data);
        return data;
      }
    } catch (e) {
      if (signal && onAbort) signal.removeEventListener('abort', onAbort);
    }
  } else if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    let onAbort = null;
    try {
      const forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,precipitation,precipitation_probability,cloud_cover,wind_speed_10m,wind_direction_10m,direct_normal_irradiance&start_date=${dateStr}&end_date=${dateStr}&timezone=auto`;
      const ctrl = new AbortController();
      const tId = setTimeout(() => ctrl.abort(), 2500);
      if (signal) {
        onAbort = () => ctrl.abort();
        signal.addEventListener('abort', onAbort, { once: true });
      }
      const res = await fetch(forecastUrl, { signal: ctrl.signal });
      clearTimeout(tId);
      if (signal && onAbort) signal.removeEventListener('abort', onAbort);
      if (signal?.aborted) return getOfflineSimulatedWeather(lat, lon, date);
      if (res.ok) {
        const data = await res.json();
        if (data.hourly) {
          const h = data.hourly;
          let idx = 14;
          if (sessionTime && typeof sessionTime === 'string') {
            const parts = sessionTime.split(':');
            const hour = parseInt(parts[0], 10);
            const minute = parts.length > 1 ? parseInt(parts[1], 10) : 0;
            if (!isNaN(hour) && hour >= 0 && hour < 24) {
              idx = (!isNaN(minute) && minute >= 30) ? Math.min(23, hour + 1) : hour;
            }
          }
          idx = Math.min(idx, (h.time ? h.time.length - 1 : 14));
          data.current = {
            temperature_2m: h.temperature_2m ? h.temperature_2m[idx] : null,
            surface_proxy: null,
            direct_normal_irradiance: h.direct_normal_irradiance ? h.direct_normal_irradiance[idx] : null,
            relative_humidity_2m: h.relative_humidity_2m ? h.relative_humidity_2m[idx] : null,
            precipitation_probability: h.precipitation_probability ? h.precipitation_probability[idx] : null,
            precipitation: h.precipitation ? h.precipitation[idx] : 0.0,
            cloud_cover: h.cloud_cover ? h.cloud_cover[idx] : null,
            wind_speed_10m: h.wind_speed_10m ? h.wind_speed_10m[idx] : null,
            wind_direction_10m: h.wind_direction_10m ? h.wind_direction_10m[idx] : null
          };
          data.isHistorical = false;
          data.isHourlyForecast = true;
          data.sessionHour = idx;
        }
        writeCache(key, data);
        return data;
      }
    } catch (e) {
      if (signal && onAbort) signal.removeEventListener('abort', onAbort);
    }
  } else {
    let onAbort = null;
    try {
      const forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,precipitation_probability,cloud_cover,wind_speed_10m,wind_direction_10m,direct_normal_irradiance&timezone=auto`;
      const ctrl = new AbortController();
      const tId = setTimeout(() => ctrl.abort(), 2000);
      if (signal) {
        onAbort = () => ctrl.abort();
        signal.addEventListener('abort', onAbort, { once: true });
      }
      const res = await fetch(forecastUrl, { signal: ctrl.signal });
      clearTimeout(tId);
      if (signal && onAbort) signal.removeEventListener('abort', onAbort);
      if (signal?.aborted) return getOfflineSimulatedWeather(lat, lon, date);
      if (res.ok) {
        const data = await res.json();
        data.isHistorical = false;
        writeCache(key, data);
        return data;
      }
    } catch (e) {
      if (signal && onAbort) signal.removeEventListener('abort', onAbort);
    }
  }

  return getOfflineSimulatedWeather(lat, lon, date);
}

function computeTrackTemp(weather) {
  const cur = weather?.current || {};
  const air = cur.temperature_2m !== null && cur.temperature_2m !== undefined ? cur.temperature_2m : null;
  const dni = cur.direct_normal_irradiance !== null && cur.direct_normal_irradiance !== undefined ? cur.direct_normal_irradiance : null;
  const wind = cur.wind_speed_10m !== null && cur.wind_speed_10m !== undefined ? cur.wind_speed_10m : null;

  let trackTemp = null;
  let prov = 'CALCULATED';
  let termLabel = 'Расчётная температура покрытия (Estimated Track Temp)';

  if (cur.surface_proxy !== undefined && cur.surface_proxy !== null && !isNaN(cur.surface_proxy)) {
    trackTemp = Math.round(cur.surface_proxy * 10) / 10;
    prov = 'API';
    termLabel = 'Температура грунта/поверхности (Surface Proxy)';
  } else if (air !== null) {
    const effDni = dni !== null ? dni : 400;
    const effWind = wind !== null ? wind : 10;
    trackTemp = Math.round((air + (0.022 * effDni) - (0.22 * effWind)) * 10) / 10;
    prov = 'CALCULATED';
    termLabel = 'Расчётная температура покрытия (Estimated Track Temp)';
  }

  if (weather?.isSimulated) {
    prov = 'DEMO';
    termLabel = 'Температура покрытия (Симуляция)';
  }

  return {
    air: air !== null ? Math.round(air * 10) / 10 : 'Н/Д',
    track: trackTemp !== null ? trackTemp : 'Н/Д',
    termLabel,
    dni: dni !== null ? Math.round(dni) : 'Н/Д',
    wind: wind !== null ? Math.round(wind) : 'Н/Д',
    windDir: cur.wind_direction_10m !== null && cur.wind_direction_10m !== undefined ? `${cur.wind_direction_10m}°` : 'Н/Д',
    humidity: cur.relative_humidity_2m !== null && cur.relative_humidity_2m !== undefined ? Math.round(cur.relative_humidity_2m) : 'Н/Д',
    rainProb: (cur.precipitation_probability !== null && cur.precipitation_probability !== undefined) ? `${Math.round(cur.precipitation_probability)}%` : 'Н/Д',
    precip: cur.precipitation !== null && cur.precipitation !== undefined ? cur.precipitation : 'Н/Д',
    cloud: cur.cloud_cover !== null && cur.cloud_cover !== undefined ? Math.round(cur.cloud_cover) : 'Н/Д',
    prov
  };
}

async function loadCircuitWeatherUI(lat, lon, containerId, date = null, session = 'Race', circuitId = null, sessionTime = null, signal = null) {
  const sig = signal || window._modalAbortController?.signal || null;
  if (sig?.aborted) return;
  const weather = await fetchCircuitWeather(lat, lon, date, session, circuitId, sessionTime, sig);
  if (sig?.aborted) return;
  const box = document.getElementById(containerId);
  if (!box) return;
  const w = computeTrackTemp(weather);

  const provBadge = w.prov === 'API' ? '<span class="prov-badge prov-api">OPEN-METEO API</span>' :
                    w.prov === 'CALCULATED' ? '<span class="prov-badge prov-calc">МОДЕЛЬ ИНСОЛЯЦИИ (CALCULATED)</span>' :
                    '<span class="prov-badge prov-demo">СИМУЛЯЦИЯ</span>';

  box.innerHTML = `
    <div class="section-header-compact">
      <h3 class="h4">${uiIcon('weather')} Метеоусловия автодрома · ${esc(w.termLabel)} ${provBadge}</h3>
      <span class="subtle" style="font-size:12px">Open-Meteo · T_track расчёт по солнечной радиации и замерам</span>
    </div>
    <div class="weather-grid">
      <div class="weather-metric">
        <span class="weather-val" style="color:var(--text-bright)">${w.air !== 'Н/Д' ? esc(w.air) + '°C' : 'Н/Д'}</span>
        <span class="weather-lbl">Воздух</span>
      </div>
      <div class="weather-metric">
        <span class="weather-val" style="color:var(--red2)">${w.track !== 'Н/Д' ? esc(w.track) + '°C' : 'Н/Д'}</span>
        <span class="weather-lbl">${esc(w.termLabel.split(' ')[0] + ' трассы')}</span>
      </div>
      <div class="weather-metric">
        <span class="weather-val" style="color:var(--cyan)">${esc(w.rainProb)}</span>
        <span class="weather-lbl">Осадки (${esc(w.precip)} мм)</span>
      </div>
    </div>
  `;
}

function renderDriverProgressionChart(driverId, canvasId, metric = 'points') {
  if (ChartLib.waiting()) return void ChartLib.then(() => renderDriverProgressionChart(driverId, canvasId, metric));
  const modalEl = document.getElementById('modal');
  const canvas = document.getElementById(canvasId);
  if (!canvas || !canvas.isConnected || (modalEl && !modalEl.classList.contains('open'))) return;

  const cleanId = (driverId || '').toLowerCase().trim();
  const canonicalId = (typeof normalizeDriverId === 'function' ? normalizeDriverId(cleanId) : cleanId) || cleanId;

  let history = DRIVER_CAREER_PROGRESSION[canonicalId] || DRIVER_CAREER_PROGRESSION[cleanId] || [];
  history = [...history];

  const curSeason = state.season;
  if (curSeason >= 2025) {
    const curBundle = Object.values(state.pageData).find(x => x?.season === curSeason && x.b?.drivers)?.b;
    const curDriver = curBundle?.drivers?.find(d => {
      const did = (d.Driver?.driverId || '').toLowerCase();
      const dCanon = typeof normalizeDriverId === 'function' ? normalizeDriverId(did) : did;
      return dCanon === canonicalId || did === canonicalId || did === cleanId;
    });
    if (curDriver && !history.some(h => h.season === curSeason)) {
      history.push({
        season: curSeason,
        pos: curDriver.position ? Number(curDriver.position) : null,
        pts: curDriver.points !== undefined ? parseFloat(curDriver.points) : null,
        wins: curDriver.wins !== undefined ? Number(curDriver.wins) : null,
        team: curDriver.Constructors?.[0]?.name || ''
      });
    }
  }

  history.sort((a, b) => a.season - b.season);

  if (history.length < 2) {
    const parent = canvas.parentElement;
    if (parent) {
      parent.innerHTML = '<div class="subtle" style="text-align:center;padding:16px;">Пилот выступает менее 2 сезонов в F1 — сравнительная карьерная динамика формируется.</div>';
    }
    return;
  }

  const labels = history.map(h => String(h.season));
  const dataPoints = history.map(h => {
    if (h.pos === null || h.pos === undefined) return null;
    if (metric === 'position') return h.pos;
    if (metric === 'wins') return h.wins;
    return h.pts;
  });

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const tickColor = isLight ? '#566173' : '#8d98a7';
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.08)';
  const isPos = metric === 'position';

  drawChart(canvasId, 'line', labels, [{
    label: isPos ? 'Место в чемпионате' : metric === 'wins' ? 'Побед за сезон' : 'Очки за сезон',
    data: dataPoints,
    borderColor: '#e10600',
    backgroundColor: 'rgba(225, 6, 0, 0.15)',
    fill: !isPos,
    spanGaps: false,
    tension: 0.35,
    pointRadius: 5,
    pointBackgroundColor: '#fff',
    pointBorderColor: '#e10600',
    pointBorderWidth: 2
  }], {
    scales: {
      y: {
        reverse: isPos,
        beginAtZero: !isPos,
        ticks: {
          stepSize: isPos ? 1 : undefined,
          color: tickColor
        },
        grid: { color: gridColor }
      },
      x: {
        ticks: { color: tickColor },
        grid: { display: false }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            if (ctx.raw === null || ctx.raw === undefined) {
              return 'Вне чемпионата F1 (NO F1 SEASON / Sabbatical)';
            }
            return isPos ? 'P' + ctx.raw + ' в Личном зачете' : ctx.raw + (metric === 'wins' ? ' побед' : ' очков');
          }
        }
      }
    }
  });
}

async function findOpenF1Session(season, race, sessionName = 'Race') {
  const day = sessionName === 'Sprint' ? race?.Sprint?.date : race?.date;
  if (Number(season) < OPENF1_FIRST_SEASON || !day) return null;
  const cacheKey = `${Number(season)}:${sessionName}:${day}`;
  if (_openF1SessionCache.has(cacheKey)) return _openF1SessionCache.get(cacheKey);
  const p = (async () => {
    const sessions = await openF1Get(`sessions?year=${Number(season)}&session_name=${encodeURIComponent(sessionName)}`);
    if (!Array.isArray(sessions) || !sessions.length) return null;
    const target = Date.parse(`${day}T00:00:00Z`);
    const valid = sessions.filter(x => !x.is_cancelled);
    return valid.find(x => x.date_start &&
      Math.abs(Date.parse(`${String(x.date_start).slice(0, 10)}T00:00:00Z`) - target) <= 36 * 3600 * 1000) ||
      valid.find(x => x.date_start &&
      Math.abs(Date.parse(`${String(x.date_start).slice(0, 10)}T00:00:00Z`) - target) <= 3 * 86400 * 1000) ||
      (valid.length === 1 && !valid[0].date_start ? valid[0] : null);
  })().catch(err => {
    _openF1SessionCache.delete(cacheKey);
    throw err;
  });
  _openF1SessionCache.set(cacheKey, p);
  return p;
}

async function loadOpenF1StintsBySessionKey(sessionKey) {
  if (!sessionKey) return null;
  const sKey = String(sessionKey);
  if (_openF1StintsBySession.has(sKey)) return _openF1StintsBySession.get(sKey);
  const p = (async () => {
    const rows = await openF1Get(`stints?session_key=${sessionKey}`);
    if (!rows || !rows.length) return null;
    const byNumber = {};
    rows.forEach(st => { (byNumber[st.driver_number] = byNumber[st.driver_number] || []).push(st); });
    Object.keys(byNumber).forEach(num => {
      const merged = [];
      byNumber[num].sort((a, b) => a.stint_number - b.stint_number).forEach(st => {
        const prev = merged[merged.length - 1];
        const prevLen = prev && prev.lap_end ? prev.lap_end - prev.lap_start + 1 : null;
        if (prev && prev.compound === st.compound && prevLen !== null &&
            Number(st.tyre_age_at_start) === Number(prev.tyre_age_at_start) + prevLen) {
          prev.lap_end = st.lap_end;
        } else {
          merged.push({ ...st });
        }
      });
      merged.forEach((st, i) => { st.stint_number = i + 1; });
      byNumber[num] = merged;
    });
    return byNumber;
  })().catch(err => {
    _openF1StintsBySession.delete(sKey);
    throw err;
  });
  _openF1StintsBySession.set(sKey, p);
  return p;
}

async function loadOpenF1Stints(season, race) {
  const session = await findOpenF1Session(season, race);
  if (!session) return null;
  return loadOpenF1StintsBySessionKey(session.session_key);
}

async function loadOpenF1Weather(season, race) {
  const session = await findOpenF1Session(season, race);
  if (!session) return null;
  const rows = await openF1Get(`weather?session_key=${session.session_key}`);
  if (!rows.length) return null;
  const stat = key => {
    const v = rows.map(r => Number(r[key])).filter(Number.isFinite);
    return v.length ? { min: Math.min(...v), max: Math.max(...v), avg: v.reduce((a, b) => a + b, 0) / v.length } : null;
  };
  return {
    air: stat('air_temperature'),
    track: stat('track_temperature'),
    humidity: stat('humidity'),
    wind: stat('wind_speed'),
    rain: rows.some(r => Number(r.rainfall) > 0)
  };
}

async function renderRaceWeather(season, race, containerId) {
  const box = document.getElementById(containerId);
  if (!box) return;
  let w = null;
  try { w = await loadOpenF1Weather(season, race); } catch {}
  if (!box.isConnected) return;
  if (!w) {
    const loc = race.Circuit?.Location || {};
    if (loc.lat && loc.long) loadCircuitWeatherUI(Number(loc.lat), Number(loc.long), containerId, race.date, 'Race', race.Circuit?.circuitId, race.time);
    else box.innerHTML = '';
    return;
  }
  const range = (s, unit) => s ? `${s.min.toFixed(0)}–${s.max.toFixed(0)}${unit}` : 'Н/Д';
  box.innerHTML = `
    <div class="section-header-compact">
      <h3 class="h4">${uiIcon('weather')} Погода во время гонки</h3>
      <span class="subtle" style="font-size:12px">Замеры на трассе · OpenF1</span>
    </div>
    <div class="weather-grid">
      <div class="weather-metric"><span class="weather-val">${w.air ? w.air.avg.toFixed(1) + '°C' : 'Н/Д'}</span><span class="weather-lbl">Воздух (${range(w.air, '°')})</span></div>
      <div class="weather-metric"><span class="weather-val" style="color:var(--red2)">${w.track ? w.track.avg.toFixed(1) + '°C' : 'Н/Д'}</span><span class="weather-lbl">Асфальт (${range(w.track, '°')})</span></div>
      <div class="weather-metric"><span class="weather-val" style="color:var(--cyan)">${w.rain ? 'Был дождь' : 'Сухо'}</span><span class="weather-lbl">Осадки</span></div>
      <div class="weather-metric"><span class="weather-val">${w.humidity ? w.humidity.avg.toFixed(0) + '%' : 'Н/Д'}</span><span class="weather-lbl">Влажность</span></div>
      <div class="weather-metric"><span class="weather-val">${w.wind ? w.wind.avg.toFixed(1) + ' м/с' : 'Н/Д'}</span><span class="weather-lbl">Ветер</span></div>
    </div>`;
}

function parseLapTimeToSeconds(strOrNum) {
  if (strOrNum === null || strOrNum === undefined || strOrNum === '') return null;
  if (typeof strOrNum === 'number') return Number.isFinite(strOrNum) && strOrNum > 0 ? strOrNum : null;
  const s = String(strOrNum).trim();
  const m = s.match(/^(?:(\d+):)?(\d+(?:\.\d+)?)$/);
  if (!m) return null;
  const mins = m[1] ? Number(m[1]) : 0;
  const secs = Number(m[2]);
  const total = mins * 60 + secs;
  return Number.isFinite(total) && total > 0 ? total : null;
}

function buildRaceControlZones(raceControl = [], totalLaps = 60) {
  const zones = [];
  (raceControl || []).forEach(ev => {
    const type = ev.rcCategory || (ev.type === 'SAFETY_CAR' ? 'SC' : ev.type === 'VSC' ? 'VSC' : ev.type === 'RED_FLAG' ? 'RED' : null);
    if (!type) return;
    const startLap = Number(ev.lap) || 1;
    const endLap = Math.min(totalLaps || startLap + 2, Number(ev.endLap) || (type === 'RED' ? startLap + 1 : startLap + 2));
    zones.push({
      type,
      startLap,
      endLap: Math.max(startLap, endLap),
      label: type === 'SC' ? 'Safety Car' : type === 'VSC' ? 'Virtual Safety Car' : 'Red Flag'
    });
  });
  return zones;
}

async function loadLapPositions(season, race, results = null, pitStops = null, raceControl = null, stints = null) {
  const targetSeason = Number(season) || state.season;
  let raceObj = (race && typeof race === 'object') ? race : null;
  const round = raceObj ? raceObj.round : race;

  if (!raceObj && round) {
    const snapSeason = readSnapshot(`${targetSeason}.json`);
    if (snapSeason?.data) {
      raceObj = readRaces(snapSeason.data).find(x => String(x.round) === String(round)) || null;
    }
    if (!raceObj) raceObj = { season: targetSeason, round };
  }
  if (!results && round) {
    const rSnap = readCache(`${targetSeason}/${round}/results.json`, { allowStale: true }) || readSnapshot(`${targetSeason}/${round}/results.json`);
    if (rSnap?.data) results = readRaces(rSnap.data)[0]?.Results || [];
  }
  if (!pitStops && round) {
    const pSnap = readCache(`${targetSeason}/${round}/pitstops.json`, { allowStale: true }) || readSnapshot(`${targetSeason}/${round}/pitstops.json`);
    if (pSnap?.data) pitStops = readRaces(pSnap.data)[0]?.PitStops || [];
  }

  const resultByNumber = {};
  const resultById = {};
  (results || []).forEach(r => {
    if (r.number) resultByNumber[Number(r.number)] = r;
    if (r.Driver?.driverId) resultById[r.Driver.driverId] = r;
  });
  let totalLaps = Math.max(...(results || []).map(r => Number(r.laps) || 0), 0);

  const pitsByDriverId = {};
  (pitStops || []).forEach(ps => {
    const did = ps.driverId;
    if (!pitsByDriverId[did]) pitsByDriverId[did] = [];
    pitsByDriverId[did].push({
      lap: Number(ps.lap) || 0,
      stop: Number(ps.stop) || 1,
      duration: ps.duration || null,
      compound: ps.compound || null
    });
  });

  if (targetSeason >= OPENF1_FIRST_SEASON && raceObj?.date) {
    try {
      const session = await findOpenF1Session(targetSeason, raceObj);
      if (session) {
        const key = session.session_key;
        const laps = await openF1Get(`laps?session_key=${key}`, l => ({
          driver_number: l.driver_number,
          lap_number: l.lap_number,
          date_start: l.date_start,
          lap_duration: l.lap_duration,
          is_pit_out_lap: l.is_pit_out_lap
        }));
        const positions = laps.length
          ? await openF1Get(`position?session_key=${key}`, x => ({ driver_number: x.driver_number, date: x.date, position: x.position }))
          : [];
        const drivers = (laps.length && positions.length)
          ? await openF1Get(`drivers?session_key=${key}`, d => ({ driver_number: d.driver_number, name_acronym: d.name_acronym, broadcast_name: d.broadcast_name, full_name: d.full_name, team_name: d.team_name, team_colour: d.team_colour }))
          : [];

        if (laps.length && positions.length) {
          const awaitedStints = (stints && typeof stints.then === 'function')
            ? await stints.catch(() => null)
            : stints;
          const resolvedStints = (awaitedStints && typeof awaitedStints === 'object' && !awaitedStints.error)
            ? awaitedStints
            : await loadOpenF1StintsBySessionKey(key).catch(() => null);
          const stintsMap = (resolvedStints && typeof resolvedStints === 'object' && !resolvedStints.error) ? resolvedStints : {};
          const rcEvents = (raceControl && raceControl.length)
            ? raceControl
            : ((await loadRaceControlEvents(targetSeason, raceObj).then(r => r.events).catch(() => [])) || []);

          const posByDriver = {};
          positions.forEach(p => { (posByDriver[p.driver_number] = posByDriver[p.driver_number] || []).push(p); });
          Object.values(posByDriver).forEach(list => list.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)));

          const lapsByDriver = {};
          laps.forEach(l => {
            (lapsByDriver[l.driver_number] = lapsByDriver[l.driver_number] || {})[l.lap_number] = l;
            if (Number(l.lap_number) > totalLaps) totalLaps = Number(l.lap_number);
          });

          const series = drivers.map(d => {
            const num = d.driver_number;
            const res = resultByNumber[num];
            const did = res?.Driver?.driverId || String(d.name_acronym || num).toLowerCase();
            const plist = posByDriver[num] || [];
            const lapMap = lapsByDriver[num] || {};
            const completed = res ? Number(res.laps) || 0 : Math.max(0, ...Object.keys(lapMap).map(Number));
            const posAt = t => {
              let pos = null;
              for (const p of plist) { if (Date.parse(p.date) <= t) pos = p.position; else break; }
              return pos;
            };
            const data = [];
            const lapTimes = [null];
            const lapDurations = [null];
            const cumSeconds = [0];
            const pitOutLaps = [];
            const grid = res && Number(res.grid) > 0 ? Number(res.grid) : null;
            data.push(grid);

            let runningTotal = 0;
            for (let lap = 1; lap <= completed; lap++) {
              const curLap = lapMap[lap];
              const next = lapMap[lap + 1];
              if (lap === completed && res && Number(res.position)) data.push(Number(res.position));
              else if (next?.date_start) data.push(posAt(Date.parse(next.date_start)));
              else data.push(null);

              const dur = parseLapTimeToSeconds(curLap?.lap_duration);
              lapDurations.push(dur);
              lapTimes.push(dur ? formatSecondsToLapTime(dur) : '—');
              if (dur) runningTotal += dur;
              cumSeconds.push(runningTotal > 0 ? runningTotal : null);
              if (curLap?.is_pit_out_lap) pitOutLaps.push(lap);
            }

            const dStints = stintsMap[num] || [];
            const rawPits = pitsByDriverId[did] || [];
            const pitEvents = rawPits.map(p => {
              const nextStint = dStints.find(st => Math.abs((Number(st.lap_start) || 0) - p.lap) <= 2 && Number(st.stint_number) > 1);
              return {
                lap: p.lap,
                duration: p.duration,
                compound: nextStint?.compound || p.compound || 'MEDIUM'
              };
            });
            if (!pitEvents.length && dStints.length > 1) {
              dStints.slice(1).forEach(st => {
                if (st.lap_start > 1) {
                  pitEvents.push({ lap: Number(st.lap_start) - 1, duration: null, compound: st.compound || 'MEDIUM' });
                }
              });
            }

            return {
              number: num,
              driverId: did,
              acronym: d.name_acronym || res?.Driver?.code || String(num),
              name: res ? driverName(res.Driver) : (d.full_name || d.name_acronym),
              colour: d.team_colour ? `#${String(d.team_colour).replace(/^#/, '')}` : (res ? teamColor(res.Constructor?.name) : '#888888'),
              team: res?.Constructor?.name || d.team_name || '—',
              finish: res ? Number(res.position) : 99,
              data,
              lapTimes,
              lapDurations,
              cumSeconds,
              pitOutLaps,
              pitEvents,
              stints: dStints.map((st, idx) => ({
                stintNumber: Number(st.stint_number) || (idx + 1),
                startLap: Number(st.lap_start) || 1,
                endLap: Number(st.lap_end) || completed || totalLaps || 1,
                compound: (st.compound && st.compound !== 'UNKNOWN' ? String(st.compound).toUpperCase() : 'UNAVAILABLE')
              }))
            };
          }).filter(s => s.data.some(v => v !== null)).sort((a, b) => a.finish - b.finish);

          const maxLen = Math.max(0, ...series.map(s => s.data.length));
          series.forEach(s => { s.gaps = new Array(maxLen).fill('—'); s.gaps[0] = s.data[0] === 1 ? 'Поул (P1)' : (s.data[0] ? `Старт P${s.data[0]}` : '—'); });
          for (let lap = 1; lap < maxLen; lap++) {
            const leader = series.find(s => s.data[lap] === 1);
            const leaderCum = leader?.cumSeconds?.[lap] || null;
            series.forEach(s => {
              if (s.data[lap] === 1) s.gaps[lap] = 'Лидер';
              else if (leaderCum && s.cumSeconds?.[lap] && s.cumSeconds[lap] >= leaderCum) {
                s.gaps[lap] = `+${(s.cumSeconds[lap] - leaderCum).toFixed(3)}с`;
              } else if (s.data[lap]) {
                s.gaps[lap] = `P${s.data[lap]}`;
              }
            });
          }

          return {
            season: targetSeason,
            round,
            totalLaps: totalLaps || (maxLen - 1),
            series,
            stintsMap,
            raceControlZones: buildRaceControlZones(rcEvents, totalLaps || (maxLen - 1)),
            source: 'OpenF1 (position + laps)'
          };
        }
      }
    } catch (e) {
      console.warn('OpenF1 loadLapPositions fallback check:', e);
    }
  }

  if (round) {
    try {
      const lapsPath = `${targetSeason}/${round}/laps.json`;
      let lapsRes = readCache(lapsPath, { allowStale: true }) || readSnapshot(lapsPath);
      if (!lapsRes && typeof f1IdbStore !== 'undefined' && f1IdbStore.get) {
        lapsRes = await f1IdbStore.get(lapsPath);
      }
      if (!lapsRes && typeof navigator !== 'undefined' && navigator.onLine !== false) {
        lapsRes = await request(`${lapsPath}?limit=2000`, { priority: false }).catch(() => null);
      }
      const jolpicaLaps = lapsRes?.data ? (readRaces(lapsRes.data)[0]?.Laps || lapsRes.data?.Laps || []) : [];
      if (Array.isArray(jolpicaLaps) && jolpicaLaps.length > 0) {
        const driverIds = new Set();
        (results || []).forEach(r => { if (r.Driver?.driverId) driverIds.add(r.Driver.driverId); });
        jolpicaLaps.forEach(l => (l.Timings || []).forEach(t => { if (t.driverId) driverIds.add(t.driverId); }));

        const maxLapNum = Math.max(totalLaps, ...jolpicaLaps.map(l => Number(l.number) || 0));
        const timingByDriverLap = {};
        jolpicaLaps.forEach(l => {
          const lNum = Number(l.number);
          (l.Timings || []).forEach(t => {
            if (!timingByDriverLap[t.driverId]) timingByDriverLap[t.driverId] = {};
            timingByDriverLap[t.driverId][lNum] = {
              position: Number(t.position) || null,
              time: t.time || null,
              seconds: parseLapTimeToSeconds(t.time)
            };
          });
        });

        const series = Array.from(driverIds).map((did, idx) => {
          const res = resultById[did];
          const tMap = timingByDriverLap[did] || {};
          const completed = res ? (Number(res.laps) || maxLapNum) : Math.max(0, ...Object.keys(tMap).map(Number));
          const data = [res && Number(res.grid) > 0 ? Number(res.grid) : null];
          const lapTimes = [null];
          const lapDurations = [null];
          const cumSeconds = [0];
          let running = 0;

          for (let lap = 1; lap <= completed; lap++) {
            const entry = tMap[lap];
            data.push(entry?.position ?? (lap === completed && res ? Number(res.position) : null));
            lapTimes.push(entry?.time || '—');
            lapDurations.push(entry?.seconds || null);
            if (entry?.seconds) running += entry.seconds;
            cumSeconds.push(running > 0 ? running : null);
          }

          const rawPits = pitsByDriverId[did] || [];
          const pitEvents = rawPits.map(p => ({
            lap: p.lap,
            duration: p.duration,
            compound: p.compound || 'MEDIUM'
          }));

          return {
            number: Number(res?.number) || (idx + 1),
            driverId: did,
            acronym: res?.Driver?.code || did.slice(0, 3).toUpperCase(),
            name: res ? driverName(res.Driver) : did,
            colour: res ? teamColor(res.Constructor?.name) : '#e10600',
            team: res?.Constructor?.name || '—',
            finish: res ? Number(res.position) : 99,
            data,
            lapTimes,
            lapDurations,
            cumSeconds,
            pitOutLaps: pitEvents.map(p => p.lap + 1),
            pitEvents
          };
        }).filter(s => s.data.some(v => v !== null)).sort((a, b) => a.finish - b.finish);

        const maxLen = Math.max(0, ...series.map(s => s.data.length));
        series.forEach(s => { s.gaps = new Array(maxLen).fill('—'); s.gaps[0] = s.data[0] === 1 ? 'Поул (P1)' : (s.data[0] ? `Старт P${s.data[0]}` : '—'); });
        for (let lap = 1; lap < maxLen; lap++) {
          const leader = series.find(s => s.data[lap] === 1);
          const leaderCum = leader?.cumSeconds?.[lap] || null;
          series.forEach(s => {
            if (s.data[lap] === 1) s.gaps[lap] = 'Лидер';
            else if (leaderCum && s.cumSeconds?.[lap] && s.cumSeconds[lap] >= leaderCum) {
              s.gaps[lap] = `+${(s.cumSeconds[lap] - leaderCum).toFixed(3)}с`;
            } else if (s.data[lap]) {
              s.gaps[lap] = `P${s.data[lap]}`;
            }
          });
        }

        return {
          season: targetSeason,
          round,
          totalLaps: maxLapNum,
          series,
          raceControlZones: buildRaceControlZones(raceControl || [], maxLapNum),
          source: 'Jolpica F1 (laps.json)'
        };
      }
    } catch (e) {
      console.warn('Jolpica laps.json lookup notice:', e);
    }
  }

  return null;
}

async function loadFastestLapTelemetry(season, race, results) {
  const fl = findOfficialFastestLap(results || []);
  const lapNumber = Number(fl?.FastestLap?.lap);
  const carNumber = Number(fl?.number);
  if (!fl || !lapNumber || !carNumber) return null;
  const session = await findOpenF1Session(season, race);
  if (!session) return null;
  const key = session.session_key;
  const laps = await openF1Get(`laps?session_key=${key}&driver_number=${carNumber}&lap_number=${lapNumber}`);
  const lap = laps[0];
  if (!lap?.date_start || !lap.lap_duration) return null;
  const start = new Date(lap.date_start);
  const end = new Date(start.getTime() + lap.lap_duration * 1000);
  const range = `date>=${start.toISOString()}&date<=${end.toISOString()}`;
  const car = await openF1Get(`car_data?session_key=${key}&driver_number=${carNumber}&${range}`, c => ({ date: c.date, speed: c.speed, n_gear: c.n_gear, throttle: c.throttle, brake: c.brake }));
  const loc = car.length >= 20 ? await openF1Get(`location?session_key=${key}&driver_number=${carNumber}&${range}`, l => ({ date: l.date, x: l.x, y: l.y })) : [];
  if (car.length < 20) return null;

  let dist = 0;
  const samples = car.map((c, i) => {
    if (i > 0) dist += (Number(car[i - 1].speed) / 3.6) * ((Date.parse(c.date) - Date.parse(car[i - 1].date)) / 1000);
    return { t: Date.parse(c.date), dist, speed: Number(c.speed), gear: Number(c.n_gear), throttle: Number(c.throttle), brake: Number(c.brake) > 0 };
  });
  const points = loc.filter(p => p.x || p.y).map(p => {
    const t = Date.parse(p.date);
    let nearest = samples[0];
    for (const s of samples) { if (Math.abs(s.t - t) < Math.abs(nearest.t - t)) nearest = s; else if (s.t > t) break; }
    return { x: p.x, y: p.y, speed: nearest.speed };
  });
  return {
    driver: fl.Driver,
    team: fl.Constructor?.name,
    lapNumber,
    lapTime: fl.FastestLap?.Time?.time,
    samples,
    points,
    stats: {
      top: Math.max(...samples.map(s => s.speed)),
      min: Math.min(...samples.map(s => s.speed)),
      fullThrottle: Math.round(samples.filter(s => s.throttle >= 98).length / samples.length * 100),
      braking: Math.round(samples.filter(s => s.brake).length / samples.length * 100),
      lengthKm: dist / 1000
    }
  };
}

function speedColour(speed, min, max) {
  const k = Math.max(0, Math.min(1, (speed - min) / Math.max(1, max - min)));
  return `hsl(${Math.round(220 - k * 220)}, 90%, 55%)`;
}

function drawSpeedMap(canvas, points, min, max) {
  if (!canvas || points.length < 2) return;
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth || 320;
  const h = canvas.clientHeight || 260;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  const xs = points.map(p => p.x);
  const ys = points.map(p => p.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const scale = Math.min((w - 24) / Math.max(1, maxX - minX), (h - 24) / Math.max(1, maxY - minY));
  const ox = (w - (maxX - minX) * scale) / 2;
  const oy = (h - (maxY - minY) * scale) / 2;
  const px = p => [ox + (p.x - minX) * scale, h - (oy + (p.y - minY) * scale)];
  ctx.lineCap = 'round';
  ctx.lineWidth = 5;
  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = px(points[i - 1]);
    const [x2, y2] = px(points[i]);
    ctx.strokeStyle = speedColour(points[i].speed, min, max);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
  const [sx, sy] = px(points[0]);
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(sx, sy, 5, 0, Math.PI * 2);
  ctx.fill();
}

function renderTelemetry(containerId, tel, title = 'Лучший круг гонки') {
  if (ChartLib.waiting()) return void ChartLib.then(() => renderTelemetry(containerId, tel, title));
  const box = document.getElementById(containerId);
  if (!box) return;
  if (!tel) {
    box.innerHTML = '<div class="empty">Телеметрия публикуется OpenF1 начиная с сезона 2023.</div>';
    return;
  }
  const { stats } = tel;
  box.innerHTML = `
    <div class="section-header-compact">
      <h3 class="h4"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/></svg> ${esc(title)}: ${esc(driverName(tel.driver))} · круг ${tel.lapNumber} · ${esc(tel.lapTime || '')}</h3>
      <span class="subtle" style="font-size:12px">Реальная телеметрия · OpenF1 car_data + location</span>
    </div>
    <div class="stat-grid" style="margin-bottom:14px">
      <div class="stat"><b>${stats.top}</b><span>макс. скорость, км/ч</span></div>
      <div class="stat"><b>${stats.min}</b><span>мин. скорость, км/ч</span></div>
      <div class="stat"><b>${stats.fullThrottle}%</b><span>круга в полный газ</span></div>
      <div class="stat"><b>${stats.braking}%</b><span>круга на тормозе</span></div>
    </div>
    <div class="telemetry-layout">
      <div class="speed-map-wrap">
        <canvas class="speed-map" id="${containerId}Map" aria-label="Карта трассы, раскрашенная по скорости"></canvas>
        <div class="speed-scale"><span>${stats.min} км/ч</span><i></i><span>${stats.top} км/ч</span></div>
      </div>
      <div class="chart-box"><canvas id="${containerId}Speed" role="img" aria-label="Скорость по дистанции круга"></canvas></div>
    </div>`;
  drawSpeedMap(document.getElementById(`${containerId}Map`), tel.points, stats.min, stats.top);
  const labels = tel.samples.map(s => (s.dist / 1000).toFixed(2));
  new Chart(document.getElementById(`${containerId}Speed`), {
    type: 'line',
    data: {
      labels,
      datasets: [
        { label: 'Скорость, км/ч', data: tel.samples.map(s => s.speed), borderColor: '#e10600', borderWidth: 2, pointRadius: 0, yAxisID: 'y', tension: 0.2 },
        { label: 'Газ, %', data: tel.samples.map(s => s.throttle), borderColor: 'rgba(39,194,129,0.7)', backgroundColor: 'rgba(39,194,129,0.16)', fill: true, borderWidth: 1, pointRadius: 0, yAxisID: 'y2', stepped: true }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: chartAnimation(),
      interaction: { mode: 'index', intersect: false },
      plugins: { tooltip: { callbacks: {
        title: items => `${items[0].label} км`,
        afterBody: items => `Передача: ${tel.samples[items[0].dataIndex]?.gear ?? '—'}${tel.samples[items[0].dataIndex]?.brake ? ' · тормоз' : ''}`
      } } },
      scales: {
        x: { ticks: { maxTicksLimit: 8 }, title: { display: true, text: 'Дистанция, км' }, grid: { display: false } },
        y: { title: { display: true, text: 'км/ч' }, grid: { color: 'rgba(128,128,128,0.12)' } },
        y2: { display: false, min: 0, max: 400 }
      }
    }
  });
}

async function renderSprintResults(season, round, containerId) {
  const box = document.getElementById(containerId);
  if (!box) return;
  try {
    const res = await request(`${season}/${round}/sprint.json`);
    const sprint = readRaces(res.data)[0]?.SprintResults || [];
    if (!box.isConnected) return;
    if (!sprint.length) {
      box.innerHTML = '<div class="empty">Результаты спринта ещё не опубликованы.</div>';
      return;
    }
    box.innerHTML = `
      <div class="table-wrap"><table>
        <thead><tr><th>#</th><th>Пилот</th><th>Команда</th><th class="num">Старт</th><th class="num">Очки</th><th>Статус</th></tr></thead>
        <tbody>${sprint.map(x => `
          <tr data-driver="${esc(x.Driver?.driverId)}" data-season="${esc(season)}" tabindex="0">
            <td style="width:40px"><span class="pos-badge ${x.position === '1' ? 'p1' : ''}">${esc(x.position)}</span></td>
            <td><b>${esc(driverName(x.Driver))}</b></td>
            <td>${esc(x.Constructor?.name || '—')}</td>
            <td class="num">${esc(x.grid || '—')}</td>
            <td class="num"><b>${esc(x.points || '0')}</b></td>
            <td>${esc(x.Time?.time || x.status || '')}</td>
          </tr>`).join('')}
        </tbody></table></div>`;
  } catch {
    if (box.isConnected) box.innerHTML = '<div class="empty">Не удалось загрузить результаты спринта.</div>';
  }
}

function initModalTabs(root, onOpen = {}) {
  const opened = new Set();
  const open = name => {
    root.querySelectorAll('.modal-tab').forEach(b => {
      const on = b.dataset.pane === name;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    root.querySelectorAll('.modal-pane').forEach(p => p.classList.toggle('active', p.dataset.pane === name));
    if (!opened.has(name) && onOpen[name]) {
      opened.add(name);
      onOpen[name]();
    }
  };
  root.querySelectorAll('.modal-tab').forEach(b => b.addEventListener('click', () => open(b.dataset.pane)));
  const first = root.querySelector('.modal-tab.active') || root.querySelector('.modal-tab');
  if (first) open(first.dataset.pane);
  return open;
}

function driverSeasonMetrics(rounds) {
  const rows = [...rounds.values()].sort((a, b) => a.round - b.round);
  const races = rows.filter(x => x.race).map(x => x.race);
  const quals = rows.filter(x => x.qual).map(x => x.qual);
  const finishes = races.filter(r => !isActualDnf(r.status)).map(r => Number(r.position)).filter(Number.isFinite);
  const grids = races.map(r => Number(r.grid)).filter(g => g > 0);
  const avg = list => list.length ? list.reduce((a, b) => a + b, 0) / list.length : null;
  return {
    starts: races.length,
    points: races.reduce((s, r) => s + (Number(r.points) || 0), 0),
    wins: races.filter(r => r.position === '1').length,
    podiums: races.filter(r => Number(r.position) <= 3).length,
    top10: races.filter(r => Number(r.position) <= 10).length,
    poles: quals.filter(q => q.position === '1').length,
    fastest: races.filter(isOfficialFastestLap).length,
    dnfs: races.filter(r => isActualDnf(r.status)).length,
    avgFinish: avg(finishes),
    avgGrid: avg(grids)
  };
}

function afterModalClosed() {
  return new Promise(resolve => {
    if (!window._modalBackPending) return resolve();
    const done = () => { clearTimeout(timer); resolve(); };
    const timer = setTimeout(done, 500);
    window.addEventListener('popstate', () => setTimeout(done, 0), { once: true });
  });
}

async function compareWith(a, season, b = null) {
  state.comparePreset = { season: Number(season), a, b };
  setPageSeason('compare', Number(season));
  const sel = $('#compareSeason');
  if (sel) sel.value = String(season);
  closeModal();
  await afterModalClosed();
  if (state.tab === 'compare') loadComparePage(); else switchTab('compare');
}

async function renderComparison() {
  if (ChartLib.waiting()) await ChartLib.load();
  const ctx = state.pageData.compare;
  const out = $('#compareResult');
  if (!ctx || !out) return;
  const a = $('#compareA').value;
  const b = $('#compareB').value;
  if (!a || !b || a === b) {
    out.innerHTML = '<div class="empty">Выберите двух разных пилотов.</div>';
    return;
  }
  const gen = state._compareGen = (state._compareGen || 0) + 1;
  out.innerHTML = '<div class="loading">Сравниваем этап за этапом…</div>';
  const [ra, rb] = await Promise.all([loadDriverSeasonRounds(ctx.season, a), loadDriverSeasonRounds(ctx.season, b)]);
  if (gen !== state._compareGen) return;

  const sa = ctx.b.drivers.find(d => d.Driver.driverId === a);
  const sb = ctx.b.drivers.find(d => d.Driver.driverId === b);
  const ma = driverSeasonMetrics(ra);
  const mb = driverSeasonMetrics(rb);
  const colA = teamColor(sa?.Constructors?.[0]?.name || '');
  let colB = teamColor(sb?.Constructors?.[0]?.name || '');
  if (colA === colB) colB = '#c4cfdb';
  PageMotif.compare(sa, sb, colA, colB);

  const duel = { qA: 0, qB: 0, rA: 0, rB: 0, shared: 0 };
  ra.forEach((x, round) => {
    const y = rb.get(round);
    if (!y) return;
    duel.shared++;
    if (x.qual && y.qual) Number(x.qual.position) < Number(y.qual.position) ? duel.qA++ : duel.qB++;
    if (x.race && y.race) Number(x.race.position) < Number(y.race.position) ? duel.rA++ : duel.rB++;
  });

  const fmt = (v, d = 0) => v === null || v === undefined ? '—' : Number(v).toFixed(d);
  const rows = [
    ['Очки в чемпионате', Number(sa?.points) || 0, Number(sb?.points) || 0, 'high', 0],
    ['Место в чемпионате', Number(sa?.position) || null, Number(sb?.position) || null, 'low', 0],
    ['Победы', ma.wins, mb.wins, 'high', 0],
    ['Подиумы', ma.podiums, mb.podiums, 'high', 0],
    ['Поулы', ma.poles, mb.poles, 'high', 0],
    ['Лучшие круги', ma.fastest, mb.fastest, 'high', 0],
    ['Финиши в очках', ma.top10, mb.top10, 'high', 0],
    ['Средний финиш', ma.avgFinish, mb.avgFinish, 'low', 1],
    ['Средняя позиция старта', ma.avgGrid, mb.avgGrid, 'low', 1],
    ['Сходы', ma.dnfs, mb.dnfs, 'low', 0],
    ['Стартов', ma.starts, mb.starts, 'none', 0]
  ];
  const rowHtml = ([label, va, vb, better, dec]) => {
    const both = va !== null && vb !== null && Number.isFinite(va) && Number.isFinite(vb);
    const total = both ? (better === 'low' ? (1 / Math.max(va, 0.1)) + (1 / Math.max(vb, 0.1)) : va + vb) : 0;
    const share = both && total > 0 ? (better === 'low' ? (1 / Math.max(va, 0.1)) / total : va / total) : 0.5;
    const winA = both && better !== 'none' && (better === 'high' ? va > vb : va < vb);
    const winB = both && better !== 'none' && (better === 'high' ? vb > va : vb < va);
    return `<div class="cmp-row">
      <b class="cmp-val ${winA ? 'win' : ''}">${fmt(va, dec)}</b>
      <div class="cmp-mid">
        <span class="cmp-label">${label}</span>
        <div class="cmp-bar"><i style="width:${(share * 100).toFixed(1)}%;background:${colA}"></i><i style="background:${colB}"></i></div>
      </div>
      <b class="cmp-val right ${winB ? 'win' : ''}">${fmt(vb, dec)}</b>
    </div>`;
  };

  out.innerHTML = `
    <div class="cmp-head">
      <div class="cmp-driver" style="--team:${colA}"><span class="eyebrow">${esc(sa?.Constructors?.[0]?.name || '')}</span><h2>${esc(driverName(sa?.Driver))}</h2></div>
      <div class="cmp-vs">VS</div>
      <div class="cmp-driver right" style="--team:${colB}"><span class="eyebrow">${esc(sb?.Constructors?.[0]?.name || '')}</span><h2>${esc(driverName(sb?.Driver))}</h2></div>
    </div>
    ${duel.shared ? `<div class="stat-grid cmp-duels">
      <div class="stat"><b>${duel.qA} — ${duel.qB}</b><span>выше в квалификации</span></div>
      <div class="stat"><b>${duel.rA} — ${duel.rB}</b><span>выше на финише</span></div>
      <div class="stat"><b>${duel.shared}</b><span>${ruPlural(duel.shared, ['общий этап', 'общих этапа', 'общих этапов'])}</span></div>
    </div>` : ''}
    <div class="card cmp-table">${rows.map(rowHtml).join('')}</div>
    <div class="card" style="margin-top:16px">
      <h2>Набор очков по ходу сезона</h2>
      <div class="chart-box"><canvas id="compareChart" role="img" aria-label="Накопленные очки по этапам"></canvas></div>
      <p class="subtle chart-note">Только гонки, без спринтов <button type="button" class="info-tip" aria-label="Как считается график" aria-expanded="false"><span aria-hidden="true">i</span></button><span class="info-tip-body" hidden>Очки за гонки (без спринтов) по данным Jolpica. Итог в таблице выше — официальные очки чемпионата.</span></p>
    </div>`;

  const allRounds = [...new Set([...ra.keys(), ...rb.keys()])].map(Number).sort((x, y) => x - y);
  const cumulative = rounds => {
    let sum = 0;
    return allRounds.map(r => { sum += Number(rounds.get(String(r))?.race?.points) || 0; return sum; });
  };
  if (state.charts.compareChart) state.charts.compareChart.destroy();
  state.charts.compareChart = new Chart($('#compareChart'), {
    type: 'line',
    data: {
      labels: allRounds.map(r => `R${r}`),
      datasets: [
        { label: driverName(sa?.Driver), data: cumulative(ra), borderColor: colA, backgroundColor: colA, borderWidth: 3, pointRadius: 2, tension: 0.25 },
        { label: driverName(sb?.Driver), data: cumulative(rb), borderColor: colB, backgroundColor: colB, borderWidth: 3, pointRadius: 2, tension: 0.25, borderDash: [6, 4] }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, scales: { y: { beginAtZero: true } } }
  });
}

function renderChampionsArchive() {
  const box = $('#championsArchive');
  if (!box) return;
  const data = getEmbeddedSnapshot()?.endpoints?.['champions.json'];
  if (!data?.drivers?.length) {
    box.innerHTML = '<div class="empty">Архив чемпионов не встроен. Запустите scripts/embed_champions.py.</div>';
    return;
  }
  const tally = (list, nameOf) => Object.entries(list.reduce((acc, x) => {
    const n = nameOf(x);
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  }, {})).sort((a, b) => b[1] - a[1]);
  const topDrivers = tally(data.drivers, x => driverName(x.driver)).slice(0, 6);
  const topTeams = tally(data.constructors, x => x.constructor.name).slice(0, 6);
  // newest decade first; the name with the most titles in a decade is shown only when it has more than one
  const byDec = {};
  data.drivers.forEach(x => { const d = Math.floor(Number(x.season) / 10) * 10; (byDec[d] = byDec[d] || []).push(x); });
  const decades = Object.keys(byDec).map(Number).sort((a, b) => b - a).map(from => {
    const list = byDec[from].slice().sort((a, b) => Number(b.season) - Number(a.season));
    const best = tally(list, x => x.driver.familyName)[0];
    return { from, list, lead: best && best[1] > 1 ? best : null };
  });
  box.innerHTML = `
    <div class="champ-leaders">
      <div><h3 class="h4">Больше всего титулов · пилоты</h3>${topDrivers.map(([n, c]) => `<div class="champ-leader"><span>${esc(n)}</span><b>${c}</b></div>`).join('')}</div>
      <div><h3 class="h4">Больше всего титулов · конструкторы</h3>${topTeams.map(([n, c]) => `<div class="champ-leader"><span>${esc(n)}</span><b>${c}</b></div>`).join('')}</div>
    </div>
    <div class="champ-wall">${decades.map(dec => `
      <section class="champ-decade" aria-label="${dec.from}-е">
        <h3 class="champ-dec-h">${dec.from}-е<small>${dec.list.length} ${ruPlural(dec.list.length, ['титул', 'титула', 'титулов'])}${dec.lead ? `<br>больше всех: ${esc(dec.lead[0])} ×${dec.lead[1]}` : ''}</small></h3>
        <div class="champ-grid">${dec.list.map(x => `
          <button class="champ-chip${dec.lead && x.driver.familyName === dec.lead[0] ? ' top' : ''}" data-history-season="${x.season}" title="${esc(driverName(x.driver))} · ${esc(x.constructor || '')} · ${esc(x.points)} очк.">
            <b>${x.season}</b><span>${esc(x.driver.familyName)}</span>
          </button>`).join('')}
        </div>
      </section>`).join('')}
    </div>`;
  ChampThumb.bind(box, data.drivers);
  box.querySelectorAll('[data-history-season]').forEach(btn => btn.addEventListener('click', () => {
    $('#historySeason').value = btn.dataset.historySeason;
    loadHistory();
    $('#historyTable')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
}

function upgradeHeroPhoto(driver) {
  Headshots.load().then(() => {
    const hero = $('.dp-hero');
    const url = Headshots.url(driver.code, 4);
    if (!hero || !url || hero.querySelector('.dp-photo') || !$('#modal')?.classList.contains('open')) return;
    const img = document.createElement('img');
    img.className = 'dp-photo';
    img.alt = driverName(driver);
    img.referrerPolicy = 'no-referrer';
    img.onerror = () => { img.remove(); hero.classList.remove('has-photo'); };
    img.onload = () => { hero.classList.add('has-photo'); hero.querySelector('.dp-avatar')?.remove(); };
    hero.insertBefore(img, hero.querySelector('.dp-id'));
  });
}

function ageFrom(dob) {
  const t = Date.parse(dob);
  if (!Number.isFinite(t)) return null;
  const diff = Date.now() - t;
  return Math.floor(diff / (365.2425 * 24 * 3600 * 1000));
}

function computeDriverTraits(season) {
  const key = Number(season);
  if (_traitCache.has(key)) return _traitCache.get(key);
  const eps = getEmbeddedSnapshot()?.endpoints || {};
  const per = {};
  const get = id => (per[id] = per[id] || { starts: 0, wins: 0, podiums: 0, poles: 0, fastest: 0, dnf: 0, pts: 0, gain: 0, gainN: 0 });
  let rounds = 0, qualRounds = 0;
  Object.keys(eps).forEach(k => {
    const m = k.match(/^(\d{4})\/(\d+)\/(results|qualifying)\.json$/);
    if (!m || Number(m[1]) !== key) return;
    const race = readRaces(eps[k])[0];
    if (m[3] === 'results') {
      if (!race?.Results?.length) return;
      rounds++;
      race.Results.forEach(r => {
        const s = get(r.Driver.driverId);
        s.starts++;
        const pos = Number(r.position);
        if (pos === 1) s.wins++;
        if (pos <= 3) s.podiums++;
        if (pos <= 10) s.pts++;
        if (isOfficialFastestLap(r)) s.fastest++;
        if (isActualDnf(r.status)) s.dnf++;
        else if (Number(r.grid) > 0) { s.gain += Number(r.grid) - pos; s.gainN++; }
      });
    } else {
      if (race?.QualifyingResults?.length) qualRounds++;
      (race?.QualifyingResults || []).forEach(q => { if (q.position === '1') get(q.Driver.driverId).poles++; });
    }
  });
  if (rounds < 3) { _traitCache.set(key, null); return null; }
  _traitStats.set(key, { per, rounds, qualRounds });
  const eligible = Object.entries(per).filter(([, s]) => s.starts >= Math.max(3, rounds * 0.5));
  const defs = [
    { id: 'poles', icon: '⏱', label: 'Король квалификаций', value: s => s.poles, min: 1, text: v => `${v} ${ruPlural(v, ['поул', 'поула', 'поулов'])} в сезоне` },
    { id: 'wins', icon: '🏆', label: 'Охотник за победами', value: s => s.wins, min: 1, text: v => `${v} ${ruPlural(v, ['победа', 'победы', 'побед'])} в сезоне` },
    { id: 'fastest', icon: '⚡', label: 'Король быстрых кругов', value: s => s.fastest, min: 1, text: v => `${v} ${ruPlural(v, ['лучший круг', 'лучших круга', 'лучших кругов'])}` },
    { id: 'gain', icon: '↗', label: 'Мастер атаки', value: s => (s.gainN ? s.gain / s.gainN : -99), min: 0.01, text: v => `в среднем ${v > 0 ? '+' : ''}${v.toFixed(1)} позиции за гонку`, fmt: v => v },
    { id: 'points', icon: '🎯', label: 'Всегда в очках', value: s => s.pts / s.starts, min: 0.01, text: (v, s) => `${s.pts} ${ruPlural(s.pts, ['финиш', 'финиша', 'финишей'])} в очках из ${s.starts}` },
    { id: 'reliab', icon: '🛡', label: 'Железная надёжность', value: s => -s.dnf / s.starts, min: -1, text: (v, s) => s.dnf ? `${s.dnf} ${ruPlural(s.dnf, ['сход', 'схода', 'сходов'])} за ${s.starts} ${ruPlural(s.starts, ['гонку', 'гонки', 'гонок'])}` : `без сходов за ${s.starts} ${ruPlural(s.starts, ['гонку', 'гонки', 'гонок'])}` }
  ];
  const usable = defs.filter(d => d.id !== 'poles' || qualRounds >= rounds);
  const ranks = {};
  usable.forEach(def => {
    const sorted = eligible.map(([id, s]) => [id, def.value(s)]).sort((a, b) => b[1] - a[1]);
    sorted.forEach(([id, v], i) => { (ranks[id] = ranks[id] || []).push({ def, rank: i + 1, v }); });
  });
  const out = {};
  eligible.forEach(([id, s]) => {
    const cands = (ranks[id] || []).filter(c => c.v >= c.def.min).sort((a, b) => a.rank - b.rank || defs.indexOf(a.def) - defs.indexOf(b.def));
    const best = cands[0];
    out[id] = best
      ? { icon: best.def.icon, label: best.rank === 1 ? best.def.label : `${best.rank}-й: ${best.def.label.toLowerCase()}`, text: best.def.text(best.v, s), rank: best.rank, rounds }
      : { icon: '🏁', label: 'Боец пелотона', text: `${s.starts} ${ruPlural(s.starts, ['гонка', 'гонки', 'гонок'])} в сезоне`, rank: 99, rounds };
    // для квадратиков в шапке личного дела: до трёх показателей, где у пилота лучшее место, только первая десятка
    out[id].list = cands.filter(c => c.rank <= 10).slice(0, 3)
      .map(c => ({ id: c.def.id, rank: c.rank, name: c.def.label.toLowerCase(), text: c.def.text(c.v, s) }));
  });
  _traitCache.set(key, out);
  return out;
}

function loadDriverCareer(driverId) {
  if (_careerCache.has(driverId)) return _careerCache.get(driverId);
  const task = (async () => {
    const total = async path => Number((await request(path)).data.MRData.total);
    const seasonsRes = await request(`drivers/${driverId}/seasons.json?limit=100`);
    const years = (seasonsRes.data.MRData.SeasonTable?.Seasons || []).map(s => Number(s.season)).sort((a, b) => a - b);
    if (!years.length) throw new Error('no seasons');
    const standingFor = async y => {
      const fromSnap = !isLiveSeasonPath(String(y)) && readDrivers(readSnapshot(`${y}/driverstandings.json`)?.data).find(d => d.Driver.driverId === driverId);
      const row = fromSnap || readDrivers((await request(`${y}/drivers/${driverId}/driverstandings.json`)).data)[0];
      return { season: y, pos: row ? Number(row.position) || null : null, pts: row ? Number(row.points) : null, wins: row ? Number(row.wins) : null, team: row?.Constructors?.map(c => c.name).join(' / ') || '—' };
    };
    const [rows, starts, w1, w2, w3, poles, fastest] = await Promise.all([
      mapLimit(years, 3, standingFor),
      total(`drivers/${driverId}/results.json?limit=1`).catch(() => null),
      request(`drivers/${driverId}/results/1.json?limit=100`).catch(() => null),
      total(`drivers/${driverId}/results/2.json?limit=1`).catch(() => null),
      total(`drivers/${driverId}/results/3.json?limit=1`).catch(() => null),
      total(`drivers/${driverId}/qualifying/1.json?limit=1`).catch(() => null),
      total(`drivers/${driverId}/fastest/1/results.json?limit=1`).catch(() => null)
    ]);
    let winRaces = w1 ? readRaces(w1.data) : [];
    const wins = w1 ? Number(w1.data.MRData.total) : null;
    if (wins && wins > winRaces.length) {
      const more = await request(`drivers/${driverId}/results/1.json?limit=100&offset=100`).catch(() => null);
      if (more) winRaces = winRaces.concat(readRaces(more.data));
    }
    const circuits = {};
    winRaces.forEach(r => {
      const n = r.Circuit?.circuitName || '—';
      circuits[n] = (circuits[n] || 0) + 1;
    });
    const seasons = rows.filter(Boolean);
    return {
      seasons,
      debut: years[0],
      titles: seasons.filter(s => s.pos === 1).map(s => s.season),
      totals: { starts, wins, podiums: wins !== null && w2 !== null && w3 !== null ? wins + w2 + w3 : null, poles, fastest, points: seasons.reduce((a, s) => a + (s.pts || 0), 0) },
      circuits: Object.entries(circuits).sort((a, b) => b[1] - a[1]).slice(0, 6)
    };
  })();
  task.catch(() => _careerCache.delete(driverId));
  _careerCache.set(driverId, task);
  return task;
}

function renderCareerPane(box, career, pal) {
  if (!box?.isConnected) return;
  const t = career.totals;
  const n = v => (v === null || v === undefined ? '—' : fmtNum(v));
  const maxWins = career.circuits[0]?.[1] || 1;
  box.innerHTML = `
    <div class="dp-titles ${career.titles.length ? 'has' : ''}">
      ${career.titles.length
        ? `<span class="dp-trophy">${uiIcon('trophy')}</span><div><b>${career.titles.length}× чемпион мира</b><small>${career.titles.join(' · ')}</small></div>`
        : `<div><b>Дебют в Формуле‑1: ${career.debut}</b><small>${career.seasons.length} ${ruPlural(career.seasons.length, ['сезон', 'сезона', 'сезонов'])} в чемпионате</small></div>`}
    </div>
    <div class="stat-grid dp-totals">
      <div class="stat"><b>${n(t.starts)}</b><span>гонок</span></div>
      <div class="stat"><b>${n(t.wins)}</b><span>побед</span></div>
      <div class="stat"><b>${n(t.podiums)}</b><span>подиумов</span></div>
      <div class="stat"><b>${n(t.poles)}</b><span>поулов</span></div>
      <div class="stat"><b>${n(t.fastest)}</b><span>лучших кругов</span></div>
      <div class="stat"><b>${n(Math.round(t.points * 10) / 10)}</b><span>очков за карьеру*</span></div>
    </div>
    <h3 class="dp-h">Сезон за сезоном</h3>
    <div class="table-wrap"><table class="career-table">
      <thead><tr><th>Сезон</th><th>Команда</th><th class="num">Место</th><th class="num">Очки</th><th class="num col-wins">Победы</th></tr></thead>
      <tbody>${career.seasons.slice().reverse().map(s => {
        const color = teamColor(String(s.team).split(' / ')[0]);
        return `<tr class="${s.pos === 1 ? 'champ-row' : ''}">
          <td><b>${s.season}</b></td>
          <td><div class="team-cell"><span class="team-livery-bar" style="background:${color}"></span>${esc(s.team)}</div></td>
          <td class="num">${s.pos === 1 ? uiIcon('trophy') + ' ' : ''}${s.pos ? 'P' + s.pos : '—'}</td>
          <td class="num"><b>${s.pts !== null ? fmtNum(s.pts) : '—'}</b></td>
          <td class="num col-wins">${s.wins !== null ? fmtNum(s.wins) : '—'}</td>
        </tr>`;
      }).join('')}</tbody></table></div>
    ${career.circuits.length ? `<h3 class="dp-h">Где побеждал чаще всего</h3>
      <div class="dp-bars">${career.circuits.map(([name, c]) => `<div class="dp-bar"><span>${esc(name)}</span><div><i style="width:${(c / maxWins * 100).toFixed(0)}%"></i></div><b>${c}</b></div>`).join('')}</div>` : ''}
    <p class="subtle" style="font-size:12px;margin:14px 0 0">* Очки считаются по регламенту своей эпохи, поэтому напрямую сравнивать разные десятилетия нельзя. Источник: Jolpica F1.</p>`;
}

function traitIcon(id) {
  return `<svg class="tt-ic" viewBox="0 0 24 24" aria-hidden="true">${TRAIT_ICONS[id] || TRAIT_ICONS.points}</svg>`;
}

function driverHeroHtml({ d, teamName, pal, season, trait, favId, photo = null, carBg = null, mate = null, compare = false }) {
  const flag = flagOf(d.nationality);
  const age = ageFrom(d.dateOfBirth);
  const num = d.permanentNumber || '';
  const initials = `${(d.givenName || '?')[0]}${(d.familyName || '?')[0]}`;
  const titles = ChampionHall.allTitles(d.driverId);
  const reigning = ChampionHall.current();
  const isReigning = reigning && reigning.row.Driver.driverId === d.driverId;
  // фото болида команды (Wikimedia Commons) фоном шапки; у действующего чемпиона фон — фото зала, болид не нужен
  const bg = isReigning ? null : carBg;
  return `<div class="dp-hero${photo ? ' has-photo' : ''}${isReigning ? ' is-champion' : ''}${bg ? ' has-carbg' : ''}">
    ${isReigning ? '<div class="hall-bg dp-hall" aria-hidden="true"></div>' : ''}
    ${bg ? `<div class="dp-carbg" aria-hidden="true"><img class="${LoadedImgs.has(bg.small) ? 'loaded' : ''}" src="${esc(bg.small)}" srcset="${esc(bg.small)} 640w, ${esc(bg.src)} 1280w" sizes="(max-width: 720px) 100vw, 920px" alt="" decoding="async"><b></b><i></i></div>` : ''}
    <span class="hud-corner tl" aria-hidden="true"></span><span class="hud-corner tr" aria-hidden="true"></span><span class="hud-corner bl" aria-hidden="true"></span><span class="hud-corner br" aria-hidden="true"></span>
    <span class="dp-stripe"></span>
    ${num ? `<div class="dp-bignum" aria-hidden="true">${esc(num)}</div>` : ''}
    ${photo ? `<img class="dp-photo${LoadedImgs.has(photo) ? ' loaded' : ''}" src="${photo}" alt="${esc(driverName(d))}" width="432" height="540" fetchpriority="high" referrerpolicy="no-referrer" onerror="this.remove();this.closest('.dp-hero')?.classList.remove('has-photo')">` : ''}
    <div class="dp-id">
      ${photo ? '' : `<div class="avatar dp-avatar" data-wiki="${esc(d.url || '')}">${esc(initials)}</div>`}
      <div class="dp-name">
        <div class="dp-team"><i></i>${esc(teamName)} · сезон ${season}</div>
        <h2><span>${esc(d.givenName || '')}</span>${esc(d.familyName || '')}</h2>
        <div class="dp-meta">${flag ? `<span class="dp-flag">${flag}</span>` : ''}${esc(ruNat(d.nationality) || '')}${age !== null ? ` · ${age} ${ruPlural(age, ['год', 'года', 'лет'])} (${esc(d.dateOfBirth)})` : ''}<span id="dpDebut"></span></div>
        ${compare ? `<button type="button" class="dp-compare" data-compare-mate="${esc(mate?.driverId || '')}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7h11l-3-3M17 17H6l3 3"/></svg>${mate ? `Сравнить с ${esc(mate.familyName || driverName(mate))}` : 'Сравнить с пилотом'}</button>` : ''}
        ${titles.length ? `<div class="dp-titles" title="Титулы чемпиона мира: архив чемпионов Jolpica${isReigning && !reigning.final ? '; последний решён математически' : ''}"><b>${titles.length > 1 ? `${titles.length}× ч` : 'Ч'}емпион мира</b><small>${titles.map(esc).join(' · ')}</small></div>` : ''}
      </div>
    </div>
    ${Favs.button('driver', favId, true)}
    <div class="dp-signature">
      ${num ? `<div class="dp-plate" title="Гоночный номер"><small>№</small><b>${esc(num)}</b></div>` : ''}
      ${(trait?.list || []).map(t => `<div class="dp-trait" title="${esc(`${t.rank}-е место среди пилотов сезона по результатам ${trait.rounds} ${ruPlural(trait.rounds, ['этапа', 'этапов', 'этапов'])}`)}">${traitIcon(t.id)}<b>${t.rank}-й</b><span class="tt-name">${esc(t.name)}</span><small>${esc(t.text)}</small></div>`).join('')}
    </div>
    ${bg ? `<small class="dp-carbg-credit"><button type="button" class="info-tip info-tip-text" aria-label="Фото болида: автор и лицензия" aria-expanded="false">Фото: Wikimedia Commons <span aria-hidden="true">i</span></button><span class="info-tip-body" hidden><a href="${esc(bg.source)}" target="_blank" rel="noopener noreferrer">${esc(bg.author)} · ${esc(bg.licence)}</a></span></small>` : ''}
    <div class="dp-palette" title="Палитра команды ${esc(teamName)}"><i style="background:${pal.p}"></i><i style="background:${pal.s}"></i><i style="background:${pal.a}"></i></div>
  </div>`;
}

function seasonLogHtml(raceResults, qualResults) {
  if (!raceResults.length) return '<div class="empty">Результаты этапов сезона пока недоступны.</div>';
  const qualBy = {};
  qualResults.forEach(q => { qualBy[q.round] = q; });
  return `<div class="table-wrap"><table class="career-table">
    <thead><tr><th>Этап</th><th>Гран-при</th><th class="num">Квал.</th><th class="num">Старт</th><th class="num">Финиш</th><th class="num col-gap">Очки</th></tr></thead>
    <tbody>${raceResults.map(r => {
      const pos = Number(r.position);
      const dnf = isActualDnf(r.status);
      const grid = Number(r.grid) || 0;
      const delta = !dnf && grid ? grid - pos : null;
      return `<tr data-race="${esc(r.round)}" data-season="${esc(r.season || state.season)}" tabindex="0">
        <td>${esc(r.round)}</td>
        <td><b>${esc(ruGP(r.raceName, true))}</b></td>
        <td class="num">${qualBy[r.round] ? 'P' + esc(qualBy[r.round].position) : '—'}</td>
        <td class="num">${grid ? 'P' + grid : 'pit'}</td>
        <td class="num"><span class="pos-badge ${pos === 1 ? 'p1' : pos === 2 ? 'p2' : pos === 3 ? 'p3' : ''}">${dnf ? '✕' : pos}</span>${delta ? `<small class="delta ${delta > 0 ? 'up' : 'down'}">${delta > 0 ? '▲' : '▼'}${Math.abs(delta)}</small>` : ''}</td>
        <td class="num col-gap">${esc(r.points || 0)}</td>
      </tr>`;
    }).join('')}</tbody></table></div>`;
}

async function loadMyPage() {
  const sel = $('#mySeason');
  if (sel && !sel.options.length) {
    sel.innerHTML = Array.from({ length: CURRENT_SEASON - 2017 }, (_, i) => CURRENT_SEASON - i).map(y => `<option value="${y}">${y}</option>`).join('');
  }
  const season = Number(sel?.value) || CURRENT_SEASON;
  const watched = Watch.read();
  const keys = Object.keys(watched);
  PageMotif.stat('my', keys.length, ruPlural(keys.length, ['гонка отмечена', 'гонки отмечены', 'гонок отмечено']));

  const chk = $('#myChecklist');
  try {
    const races = readRaces((await request(`${season}.json`)).data).filter(r => isRaceCompleted({ ...r, season }));
    if (chk?.isConnected) {
      chk.innerHTML = races.length ? races.map(r => {
        const id = `${season}-${r.round}`;
        return `<button type="button" class="check-chip${Watch.has(id) ? ' on' : ''}" data-watch="${id}" aria-pressed="${Watch.has(id)}" title="${esc(ruGP(r.raceName))}"><small>R${esc(r.round)}</small><span>${esc(ruGP(r.raceName, true))}</span></button>`;
      }).join('') : '<div class="empty">В этом сезоне ещё нет прошедших гонок.</div>';
    }
  } catch { if (chk?.isConnected) chk.innerHTML = '<div class="empty">Не удалось загрузить календарь сезона.</div>'; }

  const statsBox = $('#myStats'), listBox = $('#myList');
  if (!keys.length) {
    statsBox.innerHTML = '';
    listBox.innerHTML = `<div class="my-empty"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4"/><path d="M5 5h11l-2 4 2 4H5"/></svg><b>Здесь появятся ваши гонки</b><p>Отметьте просмотренную гонку в списке выше или в её окне.</p></div>`;
    return;
  }
  statsBox.innerHTML = '<div class="loading" style="grid-column:1/-1">Считаем вашу статистику…</div>';
  const details = (await mapLimit(keys, 3, async k => {
    const [y, r] = k.split('-').map(Number);
    const res = await request(`${y}/${r}/results.json`);
    const race = readRaces(res.data)[0];
    return race ? { key: k, season: y, round: r, race, winner: race.Results?.[0], at: watched[k] } : null;
  })).filter(Boolean);
  if (!statsBox.isConnected) return;

  const tally = (list, f) => Object.entries(list.reduce((a, x) => { const n = f(x); if (n) a[n] = (a[n] || 0) + 1; return a; }, {})).sort((a, b) => b[1] - a[1]);
  const circuit = tally(details, d => d.race.Circuit?.circuitName)[0];
  const winner = tally(details, d => d.winner && driverName(d.winner.Driver))[0];
  const team = tally(details, d => d.winner?.Constructor?.name)[0];
  const favIds = Favs.list('driver');
  const mine = favIds.length ? details.flatMap(d => (d.race.Results || []).filter(x => favIds.includes(x.Driver.driverId))) : [];
  const avg = mine.length ? mine.map(x => Number(x.position)).filter(Number.isFinite).reduce((a, b) => a + b, 0) / mine.length : null;
  const seasonsSeen = new Set(details.map(d => d.season)).size;
  const doneNow = (state.calendar || []).filter(r => isRaceCompleted({ ...r, season: state.season })).length;
  const watchedNow = details.filter(d => d.season === CURRENT_SEASON).length;
  const card = (big, label, sub = '') => `<div class="my-stat"><b>${big}</b><span>${label}</span>${sub ? `<small>${sub}</small>` : ''}</div>`;
  statsBox.innerHTML = [
    card(details.length, ruPlural(details.length, ['гонка просмотрена', 'гонки просмотрены', 'гонок просмотрено']), `${seasonsSeen} ${ruPlural(seasonsSeen, ['сезон', 'сезона', 'сезонов'])}`),
    doneNow ? card(`${Math.round(watchedNow / doneNow * 100)}%`, `сезона ${CURRENT_SEASON} просмотрено`, `${watchedNow} из ${doneNow} ${ruPlural(doneNow, ['гонки', 'гонок', 'гонок'])}`) : '',
    circuit ? card(esc(String(circuit[0]).replace(/ (Circuit|Autodrome|Grand Prix Circuit)$/, '')), 'любимая трасса', `${circuit[1]} ${ruPlural(circuit[1], ['гонка', 'гонки', 'гонок'])}`) : '',
    winner ? card(esc(winner[0]), 'чаще всех побеждал у вас', `${winner[1]} ${ruPlural(winner[1], ['победа', 'победы', 'побед'])}`) : '',
    team ? card(esc(team[0]), 'самая успешная команда', `${team[1]} ${ruPlural(team[1], ['победа', 'победы', 'побед'])}`) : '',
    avg !== null ? card(`P${avg.toFixed(1)}`, favIds.length > 1 ? 'средний финиш ваших пилотов' : 'средний финиш вашего пилота', `${mine.length} ${ruPlural(mine.length, ['результат', 'результата', 'результатов'])} в просмотренных гонках`) : ''
  ].join('');
  listBox.innerHTML = `<div class="history-list" style="max-height:none">${details.sort((a, b) => Date.parse(b.race.date) - Date.parse(a.race.date)).map(d => `
    <div class="history-row" data-race="${d.round}" data-season="${d.season}" role="button" tabindex="0">
      <b class="history-year">${d.season}</b>
      <div class="history-main"><strong>${esc(d.race.raceName)}</strong>
        <div class="subtle" style="font-size:12px">${d.winner ? `${uiIcon('trophy')} ${esc(driverName(d.winner.Driver))} · ${esc(d.winner.Constructor?.name || '')}` : 'Результат не опубликован'}</div></div>
      <button class="check-chip on" data-watch="${d.key}" aria-label="Убрать отметку" title="Убрать отметку">✓</button>
    </div>`).join('')}</div>`;
}

async function loadOvertakeEvents(season, race, results, pitStops = []) {
  const session = await findOpenF1Session(season, race);
  if (!session) return [];
  const key = session.session_key;
  const driverSlim = d => ({ driver_number: d.driver_number, name_acronym: d.name_acronym, broadcast_name: d.broadcast_name, full_name: d.full_name, team_name: d.team_name, team_colour: d.team_colour });
  const lapSlim = l => ({ driver_number: l.driver_number, lap_number: l.lap_number, date_start: l.date_start, lap_duration: l.lap_duration, is_pit_out_lap: l.is_pit_out_lap });
  const ov = await openF1Get(`overtakes?session_key=${key}`);
  const drivers = await openF1Get(`drivers?session_key=${key}`, driverSlim);
  const laps = await openF1Get(`laps?session_key=${key}`, lapSlim);
  const byNum = {};
  drivers.forEach(d => { byNum[d.driver_number] = d; });
  const lapsBy = {};
  laps.forEach(l => { if (l.date_start) (lapsBy[l.driver_number] = lapsBy[l.driver_number] || []).push(l); });
  Object.values(lapsBy).forEach(list => list.sort((a, b) => Date.parse(a.date_start) - Date.parse(b.date_start)));
  const lapAt = (num, date) => {
    const t = Date.parse(date);
    let lap = null;
    (lapsBy[num] || []).forEach(l => { if (Date.parse(l.date_start) <= t) lap = l.lap_number; });
    return lap;
  };
  const idByNum = {};
  (results || []).forEach(r => { idByNum[Number(r.number)] = r.Driver?.driverId; });
  const pitLaps = {};
  (pitStops || []).forEach(ps => { (pitLaps[ps.driverId] = pitLaps[ps.driverId] || []).push(Number(ps.lap)); });
  const nearPit = (num, lap) => lap !== null && (pitLaps[idByNum[num]] || []).some(l => Math.abs(l - lap) <= 1);
  const real = ov.map(o => ({ o, lap: lapAt(o.overtaking_driver_number, o.date) }))
    .filter(({ o, lap }) => !nearPit(o.overtaking_driver_number, lap) && !nearPit(o.overtaken_driver_number, lap));
  return real.map(({ o, lap }) => {
    const a = byNum[o.overtaking_driver_number]?.name_acronym || `#${o.overtaking_driver_number}`;
    const b = byNum[o.overtaken_driver_number]?.name_acronym || `#${o.overtaken_driver_number}`;
    return {
      lap,
      type: 'OVERTAKE',
      badge: 't-badge-battle',
      title: `${a} обошёл ${b}`,
      desc: `${a} поднимается на P${o.position} · данные OpenF1 без смен позиций из-за пит-стопов`,
      turn: null, progress: null, locationStatus: 'UNAVAILABLE'
    };
  });
}
