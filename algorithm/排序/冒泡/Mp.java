package 冒泡;

import org.jetbrains.annotations.NotNull;

import java.util.Arrays;

/**
 * descriptionTODO
 * <p>时间 2020/7/22 - 3:38 下午</p>
 *
 * @author 吕蓬
 * @version 1.0
 */
public class Mp {
    public static void sort(int @NotNull [] arr) {
        for (int i = 0; i < arr.length -1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < arr.length; j++) {
                minIndex = arr[j] < arr[minIndex] ? j : minIndex;
            }
            if (minIndex != i) {
                swap(arr,i, minIndex);
            }
        }
    }
    public static void swap(int @NotNull [] arr, int i, int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    public static void main(String[] args) {
        int[] arr = {4,3,2,5,8,1,9};
        sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
