{
        var a = prompt('Веддіть змінну А');
        var b = prompt('Веддіть змінну B');
        var c = prompt('Веддіть змінну C');

        var root_part = Math.sqrt(b * b - 4 * a * c);
        var denom = 2 * a;

        var root1 = ( -b + root_part ) / denom;
        var root2 = ( -b - root_part ) / denom;

        document.write("1st root: "+root1+"<br />");
        document.write("2nd root: "+root2+"<br />");
    }