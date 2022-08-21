﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wisconsys.DAL;

namespace Wisconsys.BLL
{
    public interface IGenericRepository<T> where T : class
    {
        IEnumerable<T> List { get; }
        void Add(T entity);
        //void Delete(T entity);
        void Update(T entity);
        T FindById(long Id);
    }
}
