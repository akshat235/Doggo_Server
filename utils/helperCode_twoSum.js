const helper_code=`
def test_two_sum(nums, target):
    solution = Solution()
    result = solution.twoSum(nums, target)
    return result

if __name__ == "__main__":
    result = test_two_sum([2,7,11,15], 9)
    print(result)`;

module.exports = helper_code;