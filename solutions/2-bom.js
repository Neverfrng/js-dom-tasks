// BEGIN
export default function solution(url) {
    window.location.href = url;

    return `${navigator.appCodeName}/${navigator.appVersion} ${url}`;
  }
// END