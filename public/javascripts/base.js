$("#back_btn").click(function () {
  if ($(location).attr('pathname') != '/') {
    window.history.back();
  }
});

if ($(location).attr('pathname').includes('status')) {
  $('#nav').hide();
}
