using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;

namespace TPRK2.Models
{
    public class Table
    {
        public int x { get; set; }
        //public static readonly int RowsCount = 100;
        //public static readonly int MinValue = 0;
        //public static readonly int MaxValue = 1000;

        //public Table(int inputx)
        //{
        //    Row.x = inputx;
        //    for (int i = 0; i< RowsCount; i++)
        //    {
        //        Row row = new Row();
        //        Rows.Add(row);
        //    }
        //}

        //public List<Row> Rows { get; set; }

        //public class Row
        //{
        //    public static int x { get; set; }
        //    private int win { get; set; }
        //    private int Y { get; set; }

        //    public Row()
        //    {
        //        Random random = new Random();
        //        Thread.Sleep(100);
        //        Y = random.Next(MinValue, MaxValue + 1);
        //        if (Y >= x)
        //        {
        //            win = Y;
        //        }
        //        else
        //        {
        //            bool won = random.NextDouble() < 0.5;
        //            if (won)
        //            {
        //                win = MaxValue;
        //            }
        //            else
        //            {
        //                win = MinValue;
        //            }
        //        }
        //    }
        //}
    }
}