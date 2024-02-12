const pythonCode = `
class Solution:
    def twoSum(self, nums, target):
        d={}
        for i in range(len(nums)):
            diff = target-nums[i]
            if diff in d.keys():
                return [i, d[diff]]
            else:
                d[nums[i]] = i`;

module.exports = pythonCode;