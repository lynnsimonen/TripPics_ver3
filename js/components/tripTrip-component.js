//Component names should be TitleCase/PascalCase
//and should be multi-word, but singular in plurality.
//When used in HTML/templates, they become kabob-case.

app.component('TripTrip', {
    //Created and maintained by this component. This function is like a constructor.
    //Called separately for each instance of this component
    data: function(){
        return{}
    },
    //Data passed into component via attibutes. Optional.
    //Objects and arrays are pass-by-reference.
    //Primitieves (number, string, boolean) are pass-by-value.
    props: {

    },
    //Usually "events" triggered by v-on:
    methods: {

    },
    //values that are updated and cached if dependencies change. Need to rtn a value. Like values used in data or props.
    computed: {

    },
    //String "template" of HTML. ONLY one root HTML element.Can reference any data, props, mmethods... using {{ name }}
    template: ``,
});