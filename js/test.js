$(document).ready(function(){
  module("Utilities");
  test("Verify $.matrix() correctness", function()
  {
     expect(1);
     same($.matrix(2, 3, 'x'),
      [['x', 'x'], ['x', 'x'], ['x', 'x']],
      'Expect $.matrix to generate the expected matrix: ' + $.matrix(2, 3, 'x'));
  });
});