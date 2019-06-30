function setEmail(element) {
  console.log('setEmail', element);
  if (!element) {
    return;
  }

  var part1 = String.fromCharCode(72, 69, 76, 76, 79).toLowerCase();
  var part2 = String.fromCharCode(64);
  var part3 = 'muellerjan.de';

  element.href = 'mai' + 'lto' + ':' + part1 + part2 + part3;
};

module.exports = {
  setEmail,
}

