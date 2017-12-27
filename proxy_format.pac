
function FindProxyForURL(url, host) {
 var proxy="PROXY 10.144.1.10:8080";
 if ( shExpMatch(host, "localhost") ) { return "DIRECT"; }
 if ( shExpMatch(host, "localhost.*") ) { return "DIRECT"; }
 if ( shExpMatch(host, "127.0.0.*") ) { return "DIRECT"; }
 if ( isPlainHostName(host) ) { return "DIRECT"; }
 if ( isInNet(myIpAddress(), "10.255.32.0", "255.255.240.0")) { return "DIRECT"; }
 if ( isInNet(myIpAddress(), "192.168.0.0", "255.255.255.0")) { return "DIRECT"; }

 if (host == "ieeexplore.ieee.org") {  return "PROXY 10.158.100.3:8080"; }
 if (host == "139.16.217.19") {  return "DIRECT"; }
 if ( dnsDomainIs(host, ".alcatel-sbell.com.cn") ) {  return "DIRECT"; }
 if (shExpMatch(host,"hackerearth*.global.ssl.fastly.net") ) {  return proxy; }
 if ( dnsDomainIs(host, ".fastly.net") ) {  return "DIRECT"; }

 if (isResolvable(host)) {
 resolved_host = dnsResolve(host);
 if ( isInNet(resolved_host, "202.50.231.70","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "139.156.76.17","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "139.156.76.1","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.200.112.55","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "132.201.30.65","255.255.255.255") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.199.16","255.255.255.255") ) { return "PROXY 87.254.212.120:8080"; }
 if ( isInNet(resolved_host, "10.116.228.168","255.255.255.248") ) { return "PROXY 87.254.212.120:8080"; }
 if ( isInNet(resolved_host, "65.55.121.128","255.255.255.224") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "207.46.7.128","255.255.255.224") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "157.55.46.0","255.255.255.224") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "157.55.229.128","255.255.255.224") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "157.55.104.96","255.255.255.224") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.72.96","255.255.255.224") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.25.32","255.255.255.224") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.225.192","255.255.255.224") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "111.221.17.128","255.255.255.224") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "212.240.203.0","255.255.255.192") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "157.55.46.64","255.255.255.192") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.57.192","255.255.255.192") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.28.192","255.255.255.192") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.225.128","255.255.255.192") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.170.192","255.255.255.192") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "111.221.22.64","255.255.255.192") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "131.228.0.0","255.255.128.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "65.54.54.128","255.255.255.128") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "207.46.57.0","255.255.255.128") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "198.73.33.0","255.255.255.128") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "157.55.40.128","255.255.255.128") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "157.55.238.0","255.255.255.128") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "143.116.149.0","255.255.255.128") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "111.221.23.0","255.255.255.128") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "65.55.127.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "208.8.1.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "207.46.5.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "199.89.161.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "199.89.143.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "198.73.42.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "198.206.182.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "198.206.181.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "198.205.61.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "198.17.148.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "198.151.197.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "193.75.232.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "193.74.230.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "192.234.243.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "192.105.195.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "15.143.139.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "15.143.137.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.51.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.30.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.251.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.151.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.12.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.109.237.0","255.255.255.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.35.44.0","255.255.254.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "202.65.8.0","255.255.254.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "198.206.186.0","255.255.254.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "194.62.120.0","255.255.254.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "194.34.60.0","255.255.254.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "193.107.176.0","255.255.254.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "198.205.56.0","255.255.252.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "193.74.204.0","255.255.252.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "193.107.172.0","255.255.252.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "192.103.16.0","255.255.252.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "202.65.0.0","255.255.248.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "202.39.112.0","255.255.240.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "193.131.16.0","255.255.240.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "192.252.16.0","255.255.240.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "159.217.128.0","255.255.224.0") ) { return proxy; }
 if ( isInNet(resolved_host, "87.254.192.0","255.255.224.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "10.125.64.0","255.255.224.0") ) { return "PROXY 87.254.212.120:8080"; }
 if ( isInNet(resolved_host, "93.183.0.0","255.255.192.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.109.128.0","255.255.192.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.109.0.0","255.255.128.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "199.118.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "192.168.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "192.11.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "159.23.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "157.56.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "155.4.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "155.132.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "152.148.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "151.98.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "149.204.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "146.112.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "143.209.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "139.54.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "139.188.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.203.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "138.120.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.88.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.183.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.18.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.171.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.17.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.140.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.112.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.111.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.108.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.107.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.104.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.103.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.1.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "132.245.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "130.198.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "130.131.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "128.251.0.0","255.255.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "159.216.0.0","255.254.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.180.0.0","255.254.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.184.0.0","255.254.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.92.0.0","255.254.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.38.0.0","255.254.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.22.0.0","255.254.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.2.0.0","255.254.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.124.0.0","255.254.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.120.0.0","255.254.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.114.0.0","255.254.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.84.0.0","255.252.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.4.0.0","255.252.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.220.0.0","255.252.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.12.0.0","255.252.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.116.0.0","255.252.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "172.16.0.0","255.240.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "135.224.0.0","255.224.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "127.0.0.0","255.0.0.0") ) { return "DIRECT"; }
 if ( isInNet(resolved_host, "10.0.0.0","255.0.0.0") ) { return "DIRECT"; }
}
 return proxy;
}
