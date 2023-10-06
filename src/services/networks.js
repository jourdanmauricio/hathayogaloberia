const BACKEND = import.meta.env.BACKEND;
const URL = import.meta.env.URL;

export const getNetworks = async () => {
  let networks = [];
  try {
    const res = await fetch(`${BACKEND}/networks`, {
      headers: { 'Content-Type': 'application/json', url: URL },
    });
    if (res.status !== 200) {
      console.log('Error GET Netwoks: ', res.status, res.statusText);
    }
    networks = await res.json();
  } catch (error) {
    console.log('ERROR DE CONEXION. Contacte al administrador!!!!', error);
  }

  return networks[0];
};
