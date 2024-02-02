// 1. square star pattern
// let n=5;
// {
// for(let i=1;i<=5;i++)
//     {
//         for(let j=1;j<=5;j++)
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }


// 2.hollow squre pattern
// let n=5;
// {
//     for(let i=0;i<n;i++)
//     {
//         for(let j=0;j<n;j++)
//         {
//             if(i===0 || i===n-1)
//             {
//                 document.write("*");
//             }
//             else 
//             {
//                 if(j===0 || j===n-1)
//                 {
//                     document.write("*");
//                 }
//                 else
//                 {
//                     document.write("&nbsp&nbsp")
//                 }
//             }
//         }
//         document.write("<br>");
//     }
// }

// 3.right tringle pattern

// let n=5;

// for(let i=1;i<=n;i++)
// {
//     for(let j=0;j<n-i;j++)
//     {
//         document.write("&nbsp&nbsp");
//     }
//     for(let k=0;k<i;k++)
//     {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// 4. left tringle pattern

// let n=5;
// {
//     for(let i=1;i<=n;i++)
//     {
//         for(let j=0;j<=n-i;j++)
//         {
//             document.write(" ");
//         }
//         for(let k=0;k<i;k++)
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// 5. downward tringle pattern

// let n=5;
// {
//     for(let i=1;i<=n;i++)
//     {
//         for(let j=0;j<=n-i;j++)
//         {
//             document.write("*");
//         }
//         document.write("<br>");
//     }
// }

// 6. hollow triangle patern

// let n=6;
// for(let i=0;i<=n;i++)
// {
//     for(let j=0;j<i;j++)
//     {
//         if(i===n)
//         {
//             document.write("*")
//         }   
//         else
//         {
//             if(j===0 || j===i-1)
//             {
//                 document.write("*");
//             }
//             else
//             {
//                 document.write("&nbsp&nbsp")
//             }
//         }    
        
//     }
//     document.write("<br>");
// }

// 7. pyramid pattern

// let n=5;
// for(let i=0;i<=n;i++)
// {
//     for(let j=0;j<=n-i;j++)
//     {
//         document.write("&nbsp&nbsp");
//     }
//     for(k=0;k<2*i-1;k++)
//     {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// 8.reverse pyramid pattern

// let n=5;
// for(let i=0;i<n;i++)
// {
//     for(let j=0;j<i;j++)
//     {
//         document.write("&nbsp&nbsp");
//     }
//     for(let k=0;k<2*(n-i)-1;k++)
//     {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// 9.hollow pyramid pattern

// let n=5;
// for(i=1;i<=5;i++)
// {
//     for(j=i;j<5;j++)
//     {
//         document.write("&nbsp&nbsp");
//     }
//     for(let k=0;k<2*i-1;k++)
//     {
//         if(i===1 || i===n)
//         {
//             document.write("*");
//         }
//         else 
//         {
//             if(k===0 || k===2*i-2)
//             {
//                 document.write("*");
//             }
//             else
//             {
//                 document.write("&nbsp&nbsp");
//             }
//         }
//     }
//     document.write("<br>")
// }

//10. diamond star pattern

// let n=5;

// for(let i=1;i<=n;i++)
// {
//     for(let j=n;j>i;j--)
//     {
//         document.write("&nbsp&nbsp");
//     }
//     for(k=0;k<i*2-1;k++)
//     {
//         document.write("*");
//     }
//     document.write("<br>");
// }
// for(let i=1;i<=n-1;i++)
// {
//     for(let j=0;j<i;j++)
//     {
//         document.write("&nbsp&nbsp");
//     }
//     for(let k=(n-i)*2-1;k>0;k--)
//     {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// 11.hollow diamond pattern

// let n=5;
// for (let i=1;i<=n;i++) 
// {
//   for (let j=n;j>i;j--) 
//   {
//     document.write("&nbsp&nbsp");
//   }
//   for (let k=0;k<i*2-1;k++) 
//   {
//      if(k===0||k===2*i-2) 
//      {
//        document.write("*");
//      }
//      else 
//      {
//          document.write("&nbsp&nbsp");
//      }
//   }
//   document.write("<br>");
// }
// for (let i=1;i<=n-1;i++) 
// {
//     for (let j=0;j<i;j++) 
//     {
//         document.write("&nbsp&nbsp");
//     }
//     for (let k=(n-i)*2-1;k>=1;k--) 
//     {
//         if(k===1||k===(n-i)*2-1) 
//         {
//            document.write("*");
//         }
//         else 
//         {
//            document.write("&nbsp&nbsp");
//         }
//      }
//     document.write("<br>");
// }

// 12. hourglass star pattern

// let n=5;
// for (let i=0;i<n;i++) 
// {
//      for (let j=0;j<i;j++) 
//      {
//        document.write("&nbsp&nbsp");
//      }
//      for (let k=0;k<(n-i)*2-1;k++) 
//      {
//        document.write("*");
//      }
//      document.write("<br>");
// }
// for (let i=2;i<=n;i++) 
// {
//      for (let j=n;j>i;j--) 
//      {
//        document.write("&nbsp&nbsp");
//      }
//      for (let k=0;k<i*2-1;k++) 
//      {
//        document.write("*");
//      }
//      document.write("<br>");
// }

// 13. right pascal pattern

// let n = 5;
// for(let i=1;i<=n;i++)
// {
//     for(let j=0;j<i;j++)
//     {
//         document.write("*");
//     }
//     document.write("<br>");
// }
// for(let i=1;i<=n-1;i++)
// {
//     for(let j=0;j<n-i;j++)
//     {
//         document.write("*");
//     }
//     document.write("<br>")
// }

// 14.left pascal pattern

// let n=5;

// for(let i=1;i<=n;i++)
// {
//     for(let j=0;j<n-i;j++)
//     {
//         document.write("&nbsp&nbsp");
//     }
//     for(let k=0;k<i;k++)
//     {
//         document.write("*");
//     }
//     document.write("<br>");
// }
// for(let i=1;i<=n-1;i++)
// {
//     for(j=0;j<i;j++)
//     {
//         document.write("&nbsp&nbsp");
//     }
//     for(k=0;k<n-i;k++)
//     {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// 15.heart star pattern

// var n = 6;
// for (let i = n / 2; i < n; i += 2) 
// {
//     for (let j = 1; j < n - i; j += 2) 
//     {
//       document.write("&nbsp&nbsp");
//     }
//     for (let j = 1; j < i + 1; j++) 
//     {
//       document.write("*");
//     }
//     for (let j = 1; j < n - i + 1; j++) 
//     {
//       document.write("&nbsp&nbsp")
//     }
//     for (let j = 1; j < i + 1; j++) 
//     {
//       document.write("*");
//     }
//     document.write("<br>");
// }
// for (let i = n; i > 0; i--) {
//     for (let j = 0; j < n - i; j++) 
//     {
//       document.write("&nbsp&nbsp");
//     }
//     for (let j = 1; j < i * 2; j++) 
//     {
//       document.write("*");
//     }
//     document.write("<br>");
// }

// {
//     var a=["j","a","v","a","s","c","r","i","p","t"];

//     for(i=9;i>=0;i--)
//     {
//         for(j=0;j<=9-i;j++)
//         {
//             document.write("&nbsp&nbsp"+a[j]);
//         }
//         document.write("<br>");

//     }
//     for(i=0;i<=9;i++)
//     {
//         for(j=0;j<=9-i;j++)
//         {
//             document.write("&nbsp&nbsp"+a[j]);
//         }
//         document.write("<br>");

//     }
// }


// {
//     var a=["j","a","v","a","s","c","r","i","p","t"];

//     for(i=9;i>=0;i--)
//     {
//         for(j=9-i;j>=0;j--)
//         {
//             document.write("&nbsp&nbsp"+a[j]);
//         }
//         document.write("<br>");

//     }
//     for(i=9;i>=0;i--)
//     {
//         for(j=0;j<=9-i;j++)
//         {
//             document.write("&nbsp&nbsp"+a[j]);
//         }
//         document.write("<br>");

//     }
// }