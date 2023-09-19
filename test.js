function handleRequest(r) {
  ngx.log(ngx.INFO, r.requestText.length);
  r.return(200, r.requestText);
}

export default {
  handleRequest
};
