package 排序.冒泡;


import java.util.Arrays;

/**
 * descriptionTODO
 * <p>时间 2020/7/22 - 3:38 下午</p>
 *
 * @author 吕蓬
 * @version 1.0
 */
public class Mp {
    public static void sort(int[] arr) {
        for (int i = arr.length; i > 0; i--) {
            for (int j = 0; j < i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j+1, j);
                }
            }
        }
    }

    public static void swap(int[] arr, int i, int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    public static void main(String[] args) {
        int[] arr = {4, 3, 2, 5, 8, 1, 9};
        sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
