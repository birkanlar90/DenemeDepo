/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p[0] === '*') {
    return false
  }

  const dp = [[true]]

  for (let j = 2; j <= p.length; j++) {
    dp[0][j] = p[j-1] === '*' && dp[0][j-2]
  }
    
  for (let i = 1; i <= s.length; i++) {
    dp[i] = []
    for (let j = 1; j <= p.length; j++) {
      switch (p[j-1]) {
        case '.':
          dp[i][j] = dp[i-1][j-1]
          break
        case '*':
          dp[i][j] = dp[i][j-2] ||
            dp[i-1][j] && (p[j-2] === '.' || s[i-1] === p[j-2])
          break
        default:
          dp[i][j] = dp[i-1][j-1] && s[i-1] === p[j-1]
      }
    }
  }

  return !!dp[s.length][p.length]
}