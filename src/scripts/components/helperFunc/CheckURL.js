export default function CheckURL(url) {
  var regURL = /^(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
  return regURL.test(url);
}
