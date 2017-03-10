// Various Higher Order Functions

export const map = ( list, component, args ) => (
    <div>
        { list.map(( item, key ) => component( item, key, args ))}
    </div>
);