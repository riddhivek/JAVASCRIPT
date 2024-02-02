// 1. triangle pattern

// let n=5;
// for(i=1;i<=n;i++)
// {
//     for(j=1;j<=i;j++)
//     {
//         document.write(j+("&nbsp&nbsp"));
//     }
//     document.write("<br>")
// }

// 2.triangle pattern

// let n=5;
// for(i=1;i<=n;i++)
// {
//     for(j=1;j<=i;j++)
//     {
//         document.write(i+("&nbsp&nbsp"));
//     }
//     document.write("<br>")
// }

// 3.triangle pattern

// let n=4;
// let count=1;
// for(i=1;i<=n;i++)
// {
//     for(j=1;j<=i;j++)
//     {
//         document.write(count);
//         count++;
//     }
//     document.write("<br>")
// }

// 4. reverce triangle

// let n=5;

// for(i=1;i<=n;i++)
// {
//     for(j=1;j<=n-i+1;j++)
//     {
//         document.write(j);
//     }
//     document.write("<br>");
// }

// 5.reverce triangle

// let n = 5;
// for (let i=1;i<=n;i++) 
// {
//      for (let j=1;j<=n-i+1;j++) 
//      {
//      document.write(n-j+1);
//      }
//      document.write("<br>");
// }

// 6. reverce tringle

// let n = 5; 
// for (let i=1;i<=n;i++) 
// {
//      for (let j=1;j<=n-i+1;j++) 
//      {
//      document.write(n-j-i+2);
//      }
//      document.write("<br>");
// }

// 7.number pyramid Pattern

// let n = 5;
// for (let i = 1; i <= n; i++) 
// {
//      for (let j = 1; j <= n - i; j++)
//      {
//          document.write("&nbsp&nbsp")
//      }
//      for (let k = 1; k <= 2 * i - 1; k++) 
//      {
//          document.write(k);
//      }
//      document.write("<br>");
// }

// 8. pyramid pattern

// let n = 3;
// let count = 1;
// for (let i = 1; i <= n; i++) 
// {
//      for (let j = 1; j <= n - i; j++) 
//      {
//      document.write("&nbsp&nbsp")
//      }
//      for (let k = 1; k <= 2 * i - 1; k++) 
//      {
//      document.write(count);
//      count++;
//      }
//      document.write("<br>");
// }

// 9.reverce pyramid pattern

// let n = 5;
// for (let i = 1; i <= n; i++) 
// {
//      for (let j = 1; j < i; j++) 
//      {
//        document.write("&nbsp&nbsp")
//      }
//      for (let k = 1; k <= 2 * (n - i + 1) - 1; k++) 
//      {
//        document.write(k);
//      }
//      document.write("<br>");
// }

// 10. diamond pattern

// let n = 5;
// for (let i = 1; i <= n; i++) 
// {
//     for (let j = 1; j < n - i + 1; j++) 
//     {
//         document.write("&nbsp&nbsp")
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) 
//     {
//         document.write(k);
//     }
//     document.write("<br>");
// }

// for (let i = 1; i <= n - 1; i++) 
// {
//     for (let j = 1; j < i + 1; j++) 
//     {
//         document.write("&nbsp&nbsp")
//     }
//     for (let k = 1; k <= 2 * (n - i) - 1; k++) 
//     {
//         document.write(k);
//     }
//     document.write("<br>");
// }

// 11. hourglass pattern

// let n = 4;
// for (let i = 1; i <= n; i++) 
// {
//      for (let j = 1; j < i; j++) 
//      {
//        document.write("&nbsp&nbsp")
//      }
//      for (let k = 1; k <= 2 * (n - i + 1) - 1; k++) 
//      {
//        document.write(k);
//      }
//      document.write("<br>");
// }
// for (let i = 1; i <= n - 1; i++) 
// {
//      for (let j = 1; j < n - i; j++) 
//      {
//        document.write("&nbsp&nbsp")
//      }
//      for (let k = 1; k <= 2 * (i + 1) - 1; k++) 
//      {
//        document.write(k);
//      }
//      document.write("<br>");
// }

// 12.pascle pattern

// let n = 4;
// for (let i = 1; i <= n; i++) 
// {
//      for (let k = 1; k <= i; k++) 
//      {
//        document.write(k);
//      }
//      document.write("<br>");
// }
// for (let i = 1; i <= n - 1; i++) 
// {
//      for (let k = 1; k <= n - i; k++) 
//      {
//        document.write(k);
//      }
//      document.write("<br>");
// }
