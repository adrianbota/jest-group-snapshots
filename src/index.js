const marker = '__JEST_GROUP_SNAPSHOTS__';

export const serializer = {
    test: (value) => value.hasOwnProperty(marker),
    serialize: (value, config, indentation, depth, refs, printer) =>
        value[marker].map(
            (arg, i) => (i % 2 === 0) ?
                `${i > 0 ? '\n\n' : ''}*** ${arg} ***\n`:
                printer(arg, config, indentation, depth, refs)
        ).join('')
};

export default () => {
    let values = [];
    const group = {};

    group.add = (value, description) => {
        values = values.concat([description, value]);
        return group;
    };

    group.values = () => ({
        [marker]: values
    });

    return group;
};
