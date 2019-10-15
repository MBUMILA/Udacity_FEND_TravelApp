import { getCity } from '../js/utils';

test('should return Paris', () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<div id="city">' + 'pARis' + '</div>';
  });
  afterEach(() => {
    const city = getCity();
    expect(city).toEqual('Paris');
  });
})
