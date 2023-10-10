const BACKEND = import.meta.env.BACKEND;
const URL = import.meta.env.URL;

export const getAuthor = async () => {
  let author;
  try {
    const res = await fetch(`${BACKEND}/users/author`, {
      headers: { 'Content-Type': 'application/json', url: URL },
    });
    if (res.status !== 200) {
      console.log('Error GET Author: ', res.status, res.statusText);
    }
    author = await res.json();
  } catch (error) {
    console.log('ERROR DE CONEXION. Contacte al administrador!!!!', error);
  }

  return author;
};
