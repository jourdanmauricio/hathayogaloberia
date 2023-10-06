const tratamientos = [
  {
    id: 1,
    href: '/laser/tratamientos/1',
    title: 'Noteworthy technology acquisitions 2021',
    body: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: '/laser/images/card-example-1.jpeg',
  },
  {
    id: 2,
    href: '/laser/tratamientos/2',
    title: 'Noteworthy technology 2023',
    body: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: '/laser/images/card-example-2.jpeg',
  },
];
export const getTratamientos = async () => {
  // const res = await ...
  return tratamientos;
};

export const getTratamiento = async (id) => {
  // const res = await ...

  // const tratramientos = await getTratamiento();

  const tratamiento = tratamientos.find((el) => el.id === parseInt(id));

  return tratamiento;
};
