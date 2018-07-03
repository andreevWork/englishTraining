export function mstLogger(action, next) {
  const { args, tree, name, context, type } = action;
  
  if (!name || !!name.match(/@/)) {
    return next(action);
  }
  
  console.groupCollapsed(`Action "${context.$treenode.type.name}.${name}.${type}"`);
  console.log(`with args - ${args.join('; ')}`);
  console.log('snapshot', tree.toJSON());
  console.groupEnd();
  
  return next(action);
}
