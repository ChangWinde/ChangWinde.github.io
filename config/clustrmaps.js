# Visitor map provider history (research notes — embed unchanged in index.jemdoc)
#
# ── Current: MapMyVisitors map.js ──
# Site id: G1TCxahhlAz3HP6t2VE8KU9UD2iniFYIbJ027odeTcY
# Active embed (index.jemdoc):
#   <div class="visitors-map-wrap" id="visitor-map">
#     <script type="text/javascript" id="mapmyvisitors"
#       src="https://mapmyvisitors.com/map.js?d=G1TCxahhlAz3HP6t2VE8KU9UD2iniFYIbJ027odeTcY&cl=ffffff&w=a">
#     </script>
#   </div>
# Status (2026-06): HTTP 200, script loads normally.
#
# ── Previous: ClustrMaps (site id qVXmqI50LHdDWdRzTqaNyq8Uf3l13TYqDyI3oLM6wo4) ──
# Timeline:
#   d9f20b6 (2024-03) — interactive widget via cdn.clustrmaps.com/map_v2.js
#   0ac3814 (2025)    — same CDN embed, homepage refresh
#   fe17e08 (2026)    — static PNG fallback (www.clustrmaps.com/map_v2.png)
#   current           — switched to MapMyVisitors
#
# Variant A — cdn.clustrmaps.com (full color params):
#   <script type="text/javascript" id="clustrmaps"
#     src="https://cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=300&t=tt&d=qVXmqI50LHdDWdRzTqaNyq8Uf3l13TYqDyI3oLM6wo4&co=2d78ad&ct=ffffff&cmo=3acc3a&cmn=ff5353">
#   </script>
#
# Variant B — cdn.clustrmaps.com (minimal params):
#   <script type="text/javascript" id="clustrmaps"
#     src="https://cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=300&t=tt&d=qVXmqI50LHdDWdRzTqaNyq8Uf3l13TYqDyI3oLM6wo4">
#   </script>
#
# Variant C — clustrmaps.com (non-CDN host):
#   <script type="text/javascript" id="clustrmaps"
#     src="https://clustrmaps.com/map_v2.js?d=qVXmqI50LHdDWdRzTqaNyq8Uf3l13TYqDyI3oLM6wo4&cl=ffffff&w=a">
#   </script>
#
# Variant D — static PNG fallback (fe17e08):
#   <div class="visitors-panel" id="clustrmaps-widget">
#     <a class="clustrmaps-link" href="https://www.clustrmaps.com/" target="_blank"
#        rel="noopener noreferrer" aria-label="View visitor map on ClustrMaps">
#       <img class="clustrmaps-map"
#         src="https://www.clustrmaps.com/map_v2.png?cl=f8fafc&w=320&t=tt&d=qVXmqI50LHdDWdRzTqaNyq8Uf3l13TYqDyI3oLM6wo4&co=94a3b8&ct=334155&cmo=22c55e&cmn=ef4444"
#         alt="Visitor map" width="320" height="200" loading="lazy" decoding="async"
#         onerror="this.closest('.visitors-panel').classList.add('is-unavailable')" />
#     </a>
#     <p class="visitors-fallback">Visitor map is blocked on this network. Try opening via VPN or visit
#       <a href="https://www.clustrmaps.com/" target="_blank" rel="noopener noreferrer">ClustrMaps</a>.
#     </p>
#   </div>
#
# Status (2026-06): www.clustrmaps.com and cdn.clustrmaps.com unreachable (SSL/TLS failure, 502).
# Re-embedding the old site id will NOT restore historical counts while the service is down.
# If ClustrMaps returns and the account is still linked to that site id, counts may resume
# from their stored data — but this cannot be verified until their servers are reachable again.
# Recovery options if old counts matter: log into clustrmaps.com admin (if restored), export
# ClustrMaps text dump, or use analytics2map to backfill a self-hosted map from a dump.
