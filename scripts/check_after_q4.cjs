async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const q4Idx = html.indexOf('Will you keep us involved throughout the development process?');
  const slice = html.slice(q4Idx, q4Idx + 5000);
  console.log(slice.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 1000));
}
run();
