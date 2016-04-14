package com.beginner.system.job;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.collections.CollectionUtils;
import org.quartz.JobDataMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.beginner.core.plugin.PageData;
import com.beginner.core.quartz.BaseJob;
import com.beginner.system.service.user.UserService;

/**
* <b>类名称：</b>Monitoring<br/>
* <b>类描述：</b>定时任务-系统预警<br/>
* <b>创建人：</b>Hsiao Lin Studio<br/>
* <b>修改人：</b><br/>
* <b>修改时间：</b>2015年05月21日 下午6:18:18<br/>
* <b>修改备注：</b><br/>
* @version 1.0.0<br/>
*/
public class Monitoring extends BaseJob {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "userService")
	private UserService userService;

	private void monitoring() {
		try {
			List<PageData> list = userService.listAll(new PageData());
			if (CollectionUtils.isNotEmpty(list)) {
				for (PageData pd : list) {
					logger.info(pd.getString("USER_NAME"), pd.getString("CHINESE_NAME"));
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void jobHandler(JobDataMap jobDataMap) {
		monitoring();
	}
}
