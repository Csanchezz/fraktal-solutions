const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [
    {id:'23', firstName:'Firulais', age:'304'},
    {id:'101', firstName:'Maléfica', age:'1024'},
    {id:'86', firstName:'Harmony', age:'21'},
    {id:'13', firstName:'Zeus', age:'1332'},
    {id:'35', firstName:'HolySpirit', age:'3333'},
    {id:'58', firstName:'AlanTuring', age:'35'}
    
];

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type:GraphQLString},
        firstName: { type:GraphQLString},
        age:{ type:GraphQLInt}
    }
    
}); 

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user:{
            type: UserType,
            args:{id:{type: GraphQLString}},
            resolve(parenValue, args){
                return _.find(users, { id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema ({
    query: RootQuery
});