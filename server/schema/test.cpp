// You have two fruit baskets containing n fruits each.You are given two 0 - indexed integer arrays basket1 and basket2 representing the cost of fruit in each basket.You want to make both baskets equal.To do so, you can use the following operation as many times as you want :

//     Chose two indices i and j,
//     and swap the ith fruit of basket1 with the jth fruit of basket2.The cost of the swap is min(basket1[i], basket2[j]).Two baskets are considered equal if sorting them according to the fruit cost makes them exactly the same baskets.

//         Return the minimum cost to make both the baskets equal
//         or -1 if impossible.

//             Example 1 :

//     Input : basket1 = [ 4, 2, 2, 2 ],
//             basket2 = [ 1, 4, 1, 2 ] Output : 1 Explanation : Swap index 1 of basket1 with index 0 of basket2,
//             which has cost 1. Now basket1 = [ 4, 1, 2, 2 ] and basket2 = [ 2, 4, 1, 2 ].Rearranging both the arrays makes them equal.Example 2 :

//     Input : basket1 = [ 2, 3, 4, 1 ],
//             basket2 = [ 3, 2, 5, 1 ] Output : -1 Explanation : It can be shown that it is impossible to make both the baskets equal.

//                                                                Constraints :

//     basket1.length == bakste2.length
//                           1 <= basket1.length
//                           <= 105 1 <= basket1[i],
//             basket2[i] <= 109

class Solution
{
public:
    long long minCost(vector<int> &basket1, vector<int> &basket2)
    {
        long long sum1 = 0, sum2 = 0;
        for (int i = 0; i < basket1.size(); i++)
        {
            sum1 += basket1[i];
            sum2 += basket2[i];
        }
        if (sum1 < sum2)
            return minCost(basket2, basket1);
        long long ans = 0;
        vector<int> diff;
        for (int i = 0; i < basket1.size(); i++)
        {
            if (basket1[i] > basket2[i])
                diff.push_back(basket1[i] - basket2[i]);
            else if (basket1[i] < basket2[i])
                ans += basket1[i];
        }
        sort(diff.begin(), diff.end());
        for (int i = 0; i < diff.size(); i++)
        {
            if (sum1 - sum2 <= diff[i])
                return ans + sum1 - sum2;
            sum1 -= diff[i];
            ans += diff[i];
        }
        return -1;
        }
};