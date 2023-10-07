const BACKEND = import.meta.env.BACKEND;
const URL = import.meta.env.URL;

export const getLessons = async () => {
  let lessons = [];
  try {
    const res = await fetch(`${BACKEND}/lessons`, {
      headers: { 'Content-Type': 'application/json', url: URL },
    });
    if (res.status !== 200) {
      console.log('Error GET Netwoks: ', res.status, res.statusText);
    }
    lessons = await res.json();
  } catch (error) {
    console.log('ERROR DE CONEXION. Contacte al administrador!!!!', error);
  }

  return lessons;
};
