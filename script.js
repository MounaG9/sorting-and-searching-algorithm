VAR
    ar : array of integers
    n, i, j, key : integer
BEGIN
    n := length(arr)
    FOR i := 1 TO n-1 DO
        key := arr[i]
        j := i - 1
        WHILE j >= 0 AND arr[j] > key DO
            arr[j+1]:= arr[j]
            j := j - 1
        END WHILE
        arr[j+1]:= key
    END FOR
    RETURN ar
END