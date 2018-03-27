const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;

const users = [
    {id: '23', firstName:'Bill', age:20},
    {id: '47', firstName:'Jason', age:22},
    {id: '45', firstName:'Amanda', age:19},
    {id: '101', firstName:'Nail', age:15},
    {id: '911', firstName:'Filly', age:25}
    
]


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
                return _.findLast(users, {id:args.id});
            }
        }
    }
});