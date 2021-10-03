function checkBSTS(a, b) {
  let n1 = a.length;
  let n2 = b.length;
  if (n1 !== n2) return false;

  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);

  let count = 0;
  a.forEach((item, i) => {
    if (item == b[i]) count++;
  });
  if (count == n1) return true;
  return false;
}
let a = [8, 3, 6, 1, 4, 7, 10, 14, 13];
let b = [8, 10, 14, 3, 6, 4, 1, 7, 13];
if (checkBSTS(a, b)) {
  document.write("YES");
} else {
  document.write("No");
}
