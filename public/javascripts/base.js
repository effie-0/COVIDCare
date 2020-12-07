$("#back_btn").click(function () {
  if ($(location).attr('pathname') != '/') {
    window.history.back();
  }
});
