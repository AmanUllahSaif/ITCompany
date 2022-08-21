﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wisconsys.DAL;

namespace Wisconsys.BLL
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly WisconsysDBEntities context;
        private DbSet<T> entities;

        public GenericRepository(WisconsysDBEntities context)
        {
            this.context = context;
            entities = context.Set<T>();
        }

        public IEnumerable<T> List
        {
            get
            {
               return entities.AsEnumerable();
            }
        }

        public void Add(T entity)
        {
            entities.Add(entity);
            context.SaveChanges();
        }

        public T FindById(long Id)
        {
            return entities.Find(Id);
        }

        public void Update(T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();
        }
    }
}
