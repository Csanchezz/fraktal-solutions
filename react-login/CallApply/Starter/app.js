var object = {
    name: "Jessy Furh",
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

object.greet();
object.greet.call({ name: 'Deylyd Furh' });
object.greet.apply({ name: 'Clarence Nole' });
