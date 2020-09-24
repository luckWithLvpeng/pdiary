#include <stdlib.h>
#include <stdio.h>

int main(void)
{
	int arr[2][3] = {
		{7,8,9},
		{4,5,6},
	};
	int xl = 0;
	int xr = 1;
	int yl = 0;
	int yr = 2;

	int i = 0;
	int j = 0;
	while (1)
	{
		// 向右
		for (; j <= yr; j++)
		{
			printf("%d\n", arr[i][j]);
		}
		if (i < xr) {
			xl++;
			j--;
			i++;
		}
		else
		{
			break;
		}
		//向下
		for (; i <= xr; i++)
		{
			printf("%d\n", arr[i][j]);
		}
		if (j > yl) {
			yr--;
			i--;
			j--;
		}
		else
		{
			break;
		}
		// 向左
		for (; j >= yl; j--)
		{
			printf("%d\n", arr[i][j]);
		}
		if (i > xl) {
			xr--;
			j++;
			i--;
		}
		else
		{
			break;
		}
		// 向上
		for (; i >= xl; i--)
		{
			printf("%d\n", arr[i][j]);
		}
		if (j < yr) {
			yl++;
			i++;
			j++;
		}
		else
		{
			break;
		}
	}

	system("pause");
	return 0;
}