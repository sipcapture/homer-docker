const LOKI_PUSH_URL = 'http://qryn:3100/loki/api/v1/push';

module.exports = async function pushLoki(body) {
  const res = await fetch(LOKI_PUSH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`Loki push failed: HTTP ${res.status}`);
  }
};
