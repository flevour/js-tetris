$.matrix = function (width, height, fill) {
  var matrix = new Array(height);
  var fill = fill || '';
  $.each(matrix, function(i, element) {
    var row = new Array(width);
    $.each(row, function(j, element2) {
      row[j] = fill;
    });
    matrix[i] = row;
  });
  console.log(matrix);
  return matrix;
};