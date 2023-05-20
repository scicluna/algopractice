function nameSpace(root, path, value) {
    const props = path.split('.')

    if (value === undefined) {
        return getValue(root, props, 0)
    } else {
        setValue(root, props, 0, value)
        return root;
    }
}

function getValue(root, props, i) {
    console.log(root)
    if (i === props.length) {
        return root;
    } else if (!root || !(props[i] in root)) {
        return undefined
    } else {
        return getValue(root[props[i]], props, i + 1)
    }
}

function setValue(root, props, i, value) {
    if (i + 1 === props.length) {
        root[props[i]] = value
    } else {
        if (!(props[i] in root)) {
            root[props[i]] = {}
        }
        setValue(root[props[i]], props, i + 1, value)
    }
}

let stuff = { moreStuff: { name: 'the stuff' } };
console.log(nameSpace(stuff, 'moreStuff.name')); 