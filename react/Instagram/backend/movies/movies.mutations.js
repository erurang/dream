import client from "../client"

export default {
    Mutation: {
        createMovie: (root, { title, year, gerne }, context, info) =>
          client.movie.create({ data: { title, year, gerne } }),
        deleteMovie: (root, { id }, context, info) =>
          client.movie.delete({ where: { id } }),
        updateMovie: (_, { id, year }) =>
          client.movie.update({ where: { id }, data: { year } }),
    }
  }