export const cleanURL = (route: string) => {
  let targetId: RegExp = /#w{1,}-{0,}w{0,}-{0,}w{0,}/;

  // Limpiar url si ya había un elemento referenciado
  route = targetId.test(route) ? route.replace(targetId, "") : "";
  
  return route;
};
