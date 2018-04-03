class DIContainer {
  static _isConstructor(module) {
    return typeof module === 'function';
  }
  
  _modules = {};
  _singletons = {};
  
  /**
   * @param name - название(ключ) модуля
   * @param module - может быть констуктором или любым другим типом(числом, объектом и тд)
   * @param opts - опции для натройки процесса создания и получения модуля
   * @param opts.isSingleton - модуль будет создан один раз и затем закэширован
   */
  register(name, module, opts) {
    this._modules[name] = {
      module,
      ...opts,
  
      _isConstructor: DIContainer._isConstructor(module)
    };
  }
  
  remove(name) {
    this._modules[name] = undefined;
    this._singletons[name] = undefined;
  }
  
  get(name) {
    if (!this._modules[name]) {
      throw Error(`Does not have such module "${name}"`);
    }
    
    const {isSingleton, _isConstructor, module} = this._modules[name];
    
    if (!_isConstructor) {
      return module;
    }
    
    if (isSingleton) {
      if (!this._singletons[name]) {
        this._singletons[name] = this._createModule(name);
      }
      
      return this._singletons[name];
    }
    
    return this._createModule(name);
  }
  
  _createModule(name) {
    const {module} = this._modules[name];
    
    return new module();
  }

}

export const DiContainer = new DIContainer();
