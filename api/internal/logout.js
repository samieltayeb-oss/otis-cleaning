export default async function handler(req, res) {
  res.setHeader('Set-Cookie', 'otis_internal_session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0');
  res.redirect(302, '/');
}
