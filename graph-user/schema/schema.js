const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [
    { id: '23', firstName: 'Firulais', age: '304', message: 'Yoooh huuuu'},
    { id: '101', firstName: 'Maléfica', age: '1024', message: 'A True Kiss'},
    { id: '86', firstName: 'Harmony', age: '21', message: 'Music is my life'},
    { id: '13', firstName: 'Zeus', age: '1332', message: 'Part in the valhala'},
    { id: '35', firstName: 'HolySpirit', age: '3333', message: 'Full you soul'},
    { id: '58', firstName: 'AlanTuring', age: '35', message: 'Creator of Computers' }

];

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }

});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parenValue, args) {
                return _.find(users, { id: args.id });
            }
        }
    }
});

const AuthQuery = new GraphQLObjectType({
    name: 'AuthQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString }, firstName: { type: GraphQLString } },
            resolve(parenValue, args) {
                return _.find(users, { id: args.id, firstName: args.firstName });
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    authquery: AuthQuery
    
});