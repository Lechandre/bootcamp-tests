function fromWhere(reg) {
    if (reg.startsWith('CY')) {
      return 'Bellville';
    } else if (reg.startsWith('CJ')) {
      return 'Paarl';
    } else if (reg.startsWith('CA')) {
      return 'Cape Town';
    } else  if (reg.startsWith('CC')) {
      return 'Some other place!';
    }
  }
  