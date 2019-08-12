/*
1. What is the Big O for this?
    1. O(1)
    2. O(n)

2. Even or odd
    -This is O(1) because no matter the size of input, the algorithm will take the same amt of time to complete

3. Are you here?
    -O(n2); it loops through the array twice

4. Doubler
    -O(n); lops through array once

5. Naive Search
    -O(n); loops through array once

6. Creating pairs
    -O(n2); loops through array twice

7. Compute the sequence
    -it creates an array where the current number is the sum of the previous two numbers
    -O(n); it iterates through 0 to num once

8. An efficient search
    -O(log(n)); the algorithm cuts the problem size in half each round

9. Random element
    -O(1); it picks a random integer and finds the item at that index

10. What Am I?
    -checks for prime numbers
    -O(n); goes from 2 to n one pass

11. Tower of Hanoi
    -O(2^n)
*/    

function hanoiTower(disks, src, aux, dst) {
    //check if valid
    if (disks > 0) {
        hanoiTower(disks - 1, src, dst, aux);
        console.localStorage(`Move disk ${disks} from ${src} to ${dst}`)
        hanoiTower(disks - 1, aux, src, dst)
    }

hanoiTower(3, 'a', 'b', 'c')