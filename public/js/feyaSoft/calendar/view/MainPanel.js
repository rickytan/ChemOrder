/**
 * FeyaSoft MyCalendar Copyright(c) 2006-2012, FeyaSoft Inc. All right reserved.
 * info@cubedrive.com http://www.cubedrive.com
 * 
 * Please read license first before your use myCalendar, For more detail
 * information, please can visit our link: http://www.cubedrive.com/myCalendar
 * 
 * You need buy one of the Feyasoft's License if you want to use MyCalendar in
 * your commercial product. You must not remove, obscure or interfere with any
 * FeyaSoft copyright, acknowledgment, attribution, trademark, warning or
 * disclaimer statement affixed to, incorporated in or otherwise applied in
 * connection with the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
 * EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
Ext.define('Ext.ux.calendar.MainPanel', {
	
			extend : 'Ext.Panel',
			
			initComponent : function() {
				this.datasource = this.datasource|| new Ext.ux.calendar.DataSource();
				this.datasource.mainPanel = this;
				this.commentTip=Ext.create('Ext.ux.calendar.CommentTip');
				this.ehandler=Ext.create('Ext.ux.calendar.EventHandler',{
							ds : this.datasource,
							mainPanel : this,
							commentTip : this.commentTip,
							calendarSetting : this.calendarSetting
						})

				this.editor=Ext.create('Ext.ux.calendar.editor.EventEditor',{
							ehandler : this.ehandler
						})
			   this.ceditor=Ext.create('Ext.ux.calendar.editor.CalendarEditor',{
							ehandler : this.ehandler
						})
				this.ehandler.editor = this.editor;
				this.ehandler.ceditor = this.ceditor;

				 this.westPanel=Ext.create('Ext.ux.calendar.WestPanel',{
							ehandler : this.ehandler
						})
				this.calendarContainer=Ext.create('Ext.ux.calendar.CalendarContainer',{
							ehandler : this.ehandler
						})
				this.backthread=Ext.create('Ext.ux.calendar.BackThread',{
							ehandler : this.ehandler
						})
				Ext.apply(this, {
							layout : 'border',
							items : [this.westPanel, this.calendarContainer]
						})
				this.ehandler.on('calendarloaded',
				this.calendarContainer.onCalendarLoadedFn,
				this.calendarContainer);
				this.on('afterrender', this.onAfterRenderFn, this);
				this.on('destroy', this.onDestroyFn, this);
				this.westPanel.relayEvents(this.calendarContainer,['changedate']);
						
				this.relayEvents(this.calendarContainer, ['beforeremoteload','remoteload']);
				this.calendarContainer.relayEvents(this.editor,['showdetailsetting']);
				this.editor.relayEvents(this.calendarContainer, ['hideeditor']);
				this.on('beforeremoteload', this._onBeforeRemoteLoadFn, this);
				this.on('remoteload', this._onRemoteLoadFn, this, {delay : 500});
				this.callParent(arguments);
			},
			_onBeforeRemoteLoadFn : function() {
				if (this.loadMask) {
					this.loadMask.show();
				}
			},
			_onRemoteLoadFn : function() {
				if (this.loadMask) {
					this.loadMask.hide();
				}
			},
			onAfterRenderFn : function(p) {
				this.calendarContainer.relayEvents(p.body, ['mousedown']);
				this.editor.render(p.body);
				this.editor.hideEditor()
				this.loadMask = new Ext.LoadMask(p.body, {
							msg : Ext.ux.calendar.Mask.MainPanel['loadMask.msg']
						});
			},
			onDestroyFn : function(p) {
				this.backthread.destroy();
				var eh = this.ehandler;
				eh.epopup.close();
			}

		});
