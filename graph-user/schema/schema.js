const graphql = require('graphql');
const axios = require('axios');
//const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull  
} = graphql;

const SchoolType = new GraphQLObjectType({
    name: 'School',
    fields: () => ({
        id: { type: GraphQLString },
        schoolName: { type: GraphQLString },
        address: { type: GraphQLString },
        description: { type: GraphQLString },
        users:{
            type: new GraphQLList(UserType),
            resolve(parentValue, args){
                return axios.get(`http://localhost:3000/schools/${parentValue.id}/users`)
                    .then(res => res.data);
            }
        }

    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        message: { type: GraphQLString },
        school: {
            type: SchoolType,
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/schools/${parentValue.schoolId}`)
                    .then(res => res.data);
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/users/${args.id}`)
                    .then(resp => resp.data);

            }
        },
        school: {
            type: SchoolType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/schools/${args.id}`)
                    .then(resp => resp.data)
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields: {
        addUser:{
            type:UserType,
            args:{
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)},
                message: {type: new GraphQLNonNull(GraphQLString)},                
                schoolId: {type: GraphQLString}
            },
            resolve(parentValue, { firstName, age, message}){
                return axios.post('http://localhost:3000/users', {firstName, age, message})
                    .then(res => res.data);
            }
        },
        deleteUser:{
            type:UserType,
            args:{ id: {type:new GraphQLNonNull(GraphQLString)},
            },
            resolve(parentValue, {id} ){
                return axios.delete(`http://localhost:3000/users/${id}`)
                    .then(res => res.data);
            }
        },
        editUser:{
            type:UserType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)},
                firstName: {type: GraphQLString},
                age: {type: GraphQLInt},
                message: {type: GraphQLString},                
                schoolId: {type: GraphQLString}
            },
            resolve(parentValue, { id, firstName, age, message, schoolId}){
                return axios.patch(`http://localhost:3000/users/${id}`, args)
                    .then(res => res.data);
            }
        },
        changeUser:{
            type:UserType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)},
                firstName: {type: GraphQLString},
                age: {type: GraphQLInt},
                message: {type: GraphQLString},                
                schoolId: {type: GraphQLString}
            },
            resolve(parentValue, { id, firstName, age, message, schoolId}){
                return axios.patch(`http://localhost:3000/users/${id}`, args)
                    .then(res => res.data);
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation

}); 