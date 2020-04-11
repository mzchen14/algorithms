function getLowestCommonManager(topManager, reportOne, reportTwo) {
    // Write your code here.
      return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager
  }
      const getOrgInfo = (currentManager, reportOne, reportTwo) => {
          let count = 0;
          for(let report of currentManager.directReports) {
              let orgInfo = getOrgInfo(report, reportOne, reportTwo)
              if(orgInfo.lowestCommonManager) return orgInfo
              count+= orgInfo.count
          }
          
          if(currentManager === reportOne || currentManager === reportTwo) count++
          const lowestCommonManager = count === 2 ? currentManager : null
          return {lowestCommonManager, count}
      }
  