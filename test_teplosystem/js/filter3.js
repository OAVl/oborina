$(".polzunok-2").slider({
  min: 20,
  max: 75,
  values: [20, 75],
  range: true,
  animate: "fast",
  slide : function(event, ui) {
    $(".polzunok-input-2-left").val(ui.values[ 0 ]);
    $(".polzunok-input-2-right").val(ui.values[ 1 ]);
  }
});
$(".polzunok-input-2-left").val($(".polzunok-2").slider("values", 0));
$(".polzunok-input-2-right").val($(".polzunok-2").slider("values", 1));
$(".polzunok-container-2 input").change(function() {
  var input_left = $(".polzunok-input-1-left").val().replace(/[^0-9]/g, ''),
    opt_left = $(".polzunok-2").slider("option", "min"),
    where_right = $(".polzunok-2").slider("values", 1),
    input_right = $(".polzunok-input-2-right").val().replace(/[^0-9]/g, ''),
    opt_right = $(".polzunok-2").slider("option", "max"),
    where_left = $(".polzunok-2").slider("values", 0);
  if (input_left > where_right) {
    input_left = where_right;
  }
  if (input_left < opt_left) {
    input_left = opt_left;
  }
  if (input_left == "") {
    input_left = 0;
  }
  if (input_right < where_left) {
    input_right = where_left;
  }
  if (input_right > opt_right) {
    input_right = opt_right;
  }
  if (input_right == "") {
    input_right = 0;
  }
  $(".polzunok-input-2-left").val(input_left);
  $(".polzunok-input-2-right").val(input_right);
  if (input_left != where_left) {
    $(".polzunok-2").slider("values", 0, input_left);
  }
  if (input_right != where_right) {
    $(".polzunok-2").slider("values", 1, input_right);
  }
});
